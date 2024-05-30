import React, { useEffect, useState } from "react";
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
import { toast } from "sonner";
import OrderDetails from "@/app/components/transactions/order.details";

const TransactionPage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [jobAccepted, setJobAccepted] = useState(false);
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const [autoAccept, setAutoAccept] = useState(false);
  const [centralLocation, setCentralLocation] = useState([
    14.6384983, 121.0576078,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  const sampleOrder = {
    id: "12345",
    customer: {
      name: "John Doe",
      phone: "+123456789",
    },
    items: [
      { name: "Item 1", quantity: 2, price: 10 },
      { name: "Item 2", quantity: 1, price: 20 },
    ],
    total: 40,
    address: "123 Main St, Anytown, USA",
    status: "Processing",
  };

  // Helper function to calculate new coordinates
  const getNewCoordinates = (lat, lon, distance, angle) => {
    const earthRadius = 6371; // Earth radius in kilometers

    const newLat =
      lat + (distance / earthRadius) * (180 / Math.PI) * Math.cos(angle);
    const newLon =
      lon +
      (distance / earthRadius) *
        (180 / Math.PI) *
        (Math.sin(angle) / Math.cos((lat * Math.PI) / 180));

    return [newLat, newLon];
  };

  const stops = [
    {
      position: getNewCoordinates(
        centralLocation[0],
        centralLocation[1],
        1.5,
        0
      ), // 1.5 km north
      type: "merchant",
      label: "Merchant",
    },
    {
      position: getNewCoordinates(
        centralLocation[0],
        centralLocation[1],
        1.5,
        Math.PI / 2
      ), // 1.5 km east
      type: "customer",
      label: "Customer",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      {showTransactionDetails && (
        <OrderDetails order={sampleOrder} onBack={handleBack} />
      )}
      <StopsSegments />
      <TransactionDetails />
      <div className="flex items-center justify-center h-full">
        <MapComponent stops={stops} centralLocation={centralLocation} />
      </div>
      <div className="h-fit z-auto">
        <BottomContainer>
          <ButtonContainer>
            <CircleButton
              icon={<IoIosCall size={20} />}
              text={"Call"}
              onClick={() =>
                (window.location.href = `tel:${sampleOrder.customer.phone}`)
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
            <OvalButton text={"Arrived at location"} />
          </div>
        </BottomContainer>
      </div>
    </div>
  );
};

export default TransactionPage;
