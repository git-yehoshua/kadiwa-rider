import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BottomContainer from "../../components/layout/bottom.container";
import ButtonContainer from "../../components/layout/button.container";
import {
  RiMessage3Fill,
  RiLightbulbFlashFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import CircleButton from "../../components/buttons/circle.button";
import MapComponent from "../../components/map/map";
import OvalButton from "../../components/buttons/oval.button";
import StopsSegments from "../../components/transactions/stops.segments";
import TransactionDetails from "../../components/transactions/transaction.details";
import OrderDetails from "../../components/transactions/order.details";
import transactionService from "../../services/transaction.service";
import { toast } from "sonner";
import QRScanner from "../scan";

const TransactionPage = () => {
  const { transactionId } = useParams();
  const [showSplash, setShowSplash] = useState(true);
  const [jobAccepted, setJobAccepted] = useState(false);
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const [autoAccept, setAutoAccept] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [centralLocation, setCentralLocation] = useState([
    14.6384983, 121.0576078,
  ]);
  const [transactionData, setTransactionData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const data = await transactionService.BOOKING.get(transactionId);
        if (data) {
          setTransactionData(data);
        } else {
          toast.error("Transaction not found");
        }
      } catch (error) {
        console.error("Error fetching transaction data:", error);
        toast.error("Error fetching transaction data");
      }
    };

    if (transactionId) {
      fetchTransactionData();
    }
  }, [transactionId]);

  const toggleAutoAccept = () => {
    setAutoAccept((prevState) => !prevState);
    toast.info(`Auto Accept is now ${!autoAccept ? "ON" : "OFF"}`);
  };

  const openOrderDetails = () => {
    setShowTransactionDetails(true);
  };

  const handleBack = () => {
    setShowTransactionDetails(false);
  };

  const handleCloseScanner = () => {
    setShowScanner(false);
  };

  const getNewCoordinates = (lat, lon, distance, angle) => {
    const earthRadius = 6371;
    const newLat =
      lat + (distance / earthRadius) * (180 / Math.PI) * Math.cos(angle);
    const newLon =
      lon +
      (distance / earthRadius) *
        (180 / Math.PI) *
        (Math.sin(angle) / Math.cos((lat * Math.PI) / 180));
    return [newLat, newLon];
  };

  const handleScanResult = (scannedData) => {
    // Handle the scanned data here and update state accordingly
    console.log("Scanned data:", scannedData);
    setShowScanner(false);
    setActiveIndex(1); // Enable the dropoff step
  };

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (!transactionData) {
    return (
      <div className="flex items-center justify-center h-screen">
        No transaction data found.
      </div>
    );
  }

  const stops = [
    {
      position: getNewCoordinates(
        centralLocation[0],
        centralLocation[1],
        1.5,
        0
      ),
      type: "merchant",
      label: "Merchant",
    },
    {
      position: getNewCoordinates(
        centralLocation[0],
        centralLocation[1],
        1.5,
        Math.PI / 2
      ),
      type: "customer",
      label: "Customer",
    },
  ];

  const handleArrivedClick = () => {
    navigate(`/main/scan`);
  };

  return (
    <div className="flex flex-col h-screen">
      {showTransactionDetails && (
        <OrderDetails order={transactionData} onBack={handleBack} />
      )}
      {showScanner && (
        <QRScanner onScan={handleScanResult} onClose={handleCloseScanner} />
      )}
      <StopsSegments
        transactionData={transactionData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <TransactionDetails
        transactionData={transactionData}
        activeIndex={activeIndex}
      />
      <div className="flex items-center justify-center h-full">
        <MapComponent stops={stops} centralLocation={centralLocation} />
      </div>
      <div className="h-fit z-auto">
        <BottomContainer showLocationButton={true}>
          <ButtonContainer>
            <CircleButton
              icon={<IoIosCall size={20} />}
              text={"Call"}
              onClick={() =>
                (window.location.href = `tel:${transactionData.customer.phone}`)
              }
            />
            <CircleButton
              icon={<RiMessage3Fill size={20} className="scale-x-[-1]" />}
              text={"Message"}
              onClick={() => toast.info("This feature is coming soon!")}
            />
            <CircleButton
              icon={<RiShoppingBag3Fill size={20} />}
              text={"Order Details"}
              onClick={openOrderDetails}
            />
            <CircleButton
              icon={
                <RiLightbulbFlashFill
                  size={20}
                  className={autoAccept ? "text-yellow-400" : "text-gray-400"}
                />
              }
              text={"Auto Accept"}
              onClick={toggleAutoAccept}
            />
          </ButtonContainer>
          <div className="flex w-full">
            <OvalButton
              text={"Arrived at location"}
              onClick={() => setShowScanner(true)}
            />
          </div>
        </BottomContainer>
      </div>
    </div>
  );
};

export default TransactionPage;
