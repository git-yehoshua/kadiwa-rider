import React, { useEffect, useState } from "react";
import SplashScreen from "../../components/common/splash/splash";
import BottomContainer from "../../components/layout/bottom.container";
import ButtonContainer from "../../components/layout/button.container";
import { FaMotorcycle } from "react-icons/fa6";
import CircleButton from "../../components/buttons/circle.button";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { HiMiniHome } from "react-icons/hi2";
import NewJobAccepted from "../../components/common/modals/new.job.accepted";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "@/app/components/layout/header.container";
import OrderItems from "@/app/components/bookings/order.items";
import { sampleOrders } from "@/app/config/test.config";

const BookingsPage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [jobAccepted, setJobAccepted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleSimulate = () => {
    setJobAccepted(true);
  };

  const handleTest = () => {
    toast.info("This feature is coming soon!");
  };

  const navToBookings = () => {
    navigate("/main/bookings");
  };

  const navToHome = () => {
    navigate("/main/home");
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="flex flex-col h-screen">
          {jobAccepted ? <NewJobAccepted /> : ""}
          <HeaderContainer>
            <h1 className="text-green-600 font-semibold">Accept Bookings</h1>
          </HeaderContainer>
          <div className="flex items-center justify-center h-full">
            <div className="flex w-full h-[86%]">
              <div
                className="flex flex-col w-full h-[91%] overflow-y-scroll"
                style={{ scrollbarWidth: "thin" }}
              >
                <OrderItems data={sampleOrders} />
              </div>
            </div>
          </div>
          <div className="h-fit z-auto">
            <BottomContainer>
              <div className="flex flex-col z-auto gap-2">
                <ButtonContainer>
                  <CircleButton
                    icon={<FaMotorcycle size={20} />}
                    text={"bookings"}
                    onClick={navToBookings}
                  />
                  <CircleButton
                    icon={<HiMiniHome size={20} />}
                    text={"home"}
                    onClick={navToHome}
                  />
                  <CircleButton
                    icon={
                      <RiLightbulbFlashFill
                        size={20}
                        className="text-yellow-400"
                      />
                    }
                    text={"Auto Accept"}
                    onClick={handleTest}
                  />
                </ButtonContainer>
              </div>
            </BottomContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingsPage;
