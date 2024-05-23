import React, { useEffect, useState } from "react";
import BottomContainer from "../../components/layout/bottom.container";
import ButtonContainer from "../../components/layout/button.container";
import { RiMessage3Fill } from "react-icons/ri";
import CircleButton from "../../components/buttons/circle.button";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { RiShoppingBag3Fill } from "react-icons/ri";
import MapComponent from "../../components/map/map";
import OvalButton from "../../components/buttons/oval.button";
import StopsSegments from "../../components/transactions/stops.segments";
import TransactionDetails from "../../components/transactions/transaction.details";
import { toast } from "sonner";
import OrderDetails from "@/app/components/transactions/order.details";

const TransactionPage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [jobAccepted, setJobAccepted] = useState(false);
  const [numberOfStops, setNumberOfStops] = useState(2);
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSimulate = () => {
    setJobAccepted(true);
  };

  const handleTest = () => {
    toast.info("This feature is coming soon!");
  };

  const handleSampleLoc = () => {
    toast.info("This is only a sample don't mind it!");
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

  const centralLocation = [14.676, 121.0437];
  const stops = [
    {
      position: getNewCoordinates(
        centralLocation[0],
        centralLocation[1],
        1.5,
        0
      ), // 1.5 km north
      type: "merchant",
      label: "Jollibee",
    },
    {
      position: getNewCoordinates(
        centralLocation[0],
        centralLocation[1],
        1.5,
        Math.PI / 2
      ), // 1.5 km east
      type: "customer",
      label: "Maria",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      {showTransactionDetails ? (
        <OrderDetails order={sampleOrder} onBack={handleBack} />
      ) : (
        ""
      )}
      <StopsSegments />
      <TransactionDetails />
      <div className="flex items-center justify-center h-full">
        <MapComponent stops={stops} />
      </div>
      <div className="h-fit z-auto">
        <BottomContainer>
          <ButtonContainer>
            <CircleButton
              icon={<IoIosCall size={20} />}
              text={"call"}
              onClick={handleTest}
            />
            <CircleButton
              icon={<RiMessage3Fill size={20} className="scale-x-[-1]" />}
              text={"message"}
              onClick={handleTest}
            />
            <CircleButton
              icon={<RiShoppingBag3Fill size={20} />}
              text={"order details"}
              onClick={openOrderDetails}
            />
            <CircleButton
              icon={
                <RiLightbulbFlashFill size={20} className="text-yellow-400" />
              }
              text={"Auto Accept"}
              onClick={handleTest}
            />
          </ButtonContainer>
          <div className="flex w-full">
            <div className="flex flex-col items-center justify-center m-2">
              <div className="flex flex-col rounded-full py-1 px-4 items-center justify-center bg-gray-800 text-yellow-50 text-xl border-[3px] border-gray-300 shadow-md">
                {numberOfStops}
                <span className="uppercase text-[12px] text-gray-100 font-semibold align-top">
                  stops
                </span>
              </div>
            </div>
            <OvalButton text={"Coming Soon"} />
          </div>
        </BottomContainer>
      </div>
    </div>
  );
};

export default TransactionPage;
