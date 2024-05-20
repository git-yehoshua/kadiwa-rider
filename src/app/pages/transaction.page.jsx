import React, { useEffect, useState } from "react";
import BottomContainer from "../components/layout/bottom.container";
import ButtonContainer from "../components/layout/button.container";
import { RiMessage3Fill } from "react-icons/ri";
import CircleButton from "../components/buttons/circle.button";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { RiShoppingBag3Fill } from "react-icons/ri";
import MapComponent from "../components/map/map";
import OvalButton from "../components/buttons/oval.button";
import StopsSegments from "../components/transactions/stops.segments";
import TransactionDetails from "../components/transactions/transaction.details";

const TransactionPage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [jobAccepted, setJobAccepted] = useState(false);
  const [numberOfStops, setNumberOfStops] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleSimulate = () => {
    setJobAccepted(true);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <StopsSegments />
        <TransactionDetails />
        <div className="flex items-center justify-center h-full">
          <MapComponent />
          <button className="absolute items-center border border-white text-white bg-yellow-500 rounded-full py-2 px-3 z-[1999] right-[34%] bottom-[37%]">
            1
          </button>

          <button className="absolute items-center border border-white text-white bg-green-500 rounded-full py-2 px-3 z-[1999] right-[10%] top-[30%]">
            2
          </button>
        </div>

        <div className="h-1/2 z-auto">
          <BottomContainer>
            <ButtonContainer>
              <CircleButton
                icon={<IoIosCall size={20} />}
                text={"call"}
                onClick={handleSimulate}
              />
              <CircleButton
                icon={<RiMessage3Fill size={20} className="scale-x-[-1]" />}
                text={"message"}
              />
              <CircleButton
                icon={<RiShoppingBag3Fill size={20} />}
                text={"order details"}
                onClick={handleSimulate}
              />
              <CircleButton
                icon={
                  <RiLightbulbFlashFill size={20} className="text-yellow-400" />
                }
                text={"Auto Accept"}
              />
            </ButtonContainer>
            <div className="flex w-full">
              <div className="flex flex-col items-center justify-center m-2">
                <div className="flex flex-col rounded-full py-1 px-4 items-center justify-center bg-gray-800 text-yellow-50 text-xl border-[3px] border-yellow-50 shadow-md">
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
    </>
  );
};

export default TransactionPage;

//save
