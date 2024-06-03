import React, { useEffect, useState } from "react";
import SplashScreen from "../../components/common/splash/splash";
import BottomContainer from "../../components/layout/bottom.container";
import SwitchButton from "../../components/buttons/switch.button";
import ButtonContainer from "../../components/layout/button.container";
import { FaMotorcycle } from "react-icons/fa6";
import { HiMiniHome } from "react-icons/hi2";
import CircleButton from "../../components/buttons/circle.button";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { RiRadioButtonLine } from "react-icons/ri";
import ProfilePicture from "../../components/user/profile.picture";
import EarningsButton from "../../components/buttons/earnings";
import MapComponent from "../../components/map/map";
import ButtonStatusIndicator from "../../components/layout/status.indicator";
import NewJobAccepted from "../../components/common/modals/new.job.accepted";
// import { TfiLayoutPlaceholder } from "react-icons/tfi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [jobAccepted, setJobAccepted] = useState(false);
  const [autoAccept, setAutoAccept] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const toggleAutoAccept = () => {
    setAutoAccept((prevState) => !prevState);
    if (!autoAccept) {
      toast.info("Auto Accept is now ON");
    } else {
      toast.info("Auto Accept is now OFF");
    }
  };

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
          <EarningsButton onClick={handleTest} />
          <div className="flex items-center justify-center h-full">
            <ProfilePicture onClick={handleSimulate} />
            <MapComponent />
          </div>
          <div className="h-fit z-auto">
            <BottomContainer showLocationButton={true}>
              <SwitchButton setOnlineStatus={setOnlineStatus} />
              <div className="flex flex-col z-auto gap-2">
                {onlineStatus ? (
                  <ButtonStatusIndicator
                    status={"You're now online"}
                    icon={<RiRadioButtonLine size={20} />}
                    color={"text-green-400"}
                  />
                ) : (
                  ""
                )}
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
                        className={
                          autoAccept ? "text-yellow-400" : "text-gray-400"
                        }
                      />
                    }
                    text={"Auto Accept"}
                    onClick={toggleAutoAccept}
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

export default Home;
