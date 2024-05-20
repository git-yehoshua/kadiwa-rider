import React, { useEffect, useState } from "react";
import SplashScreen from "../components/common/splash/splash";
import BottomContainer from "../components/layout/bottom.container";
import SwitchButton from "../components/buttons/switch.button";
import ButtonContainer from "../components/layout/button.container";
// import { FaCarRear } from "react-icons/fa6";
// import { MdOutlineWork } from "react-icons/md";
import { TfiLayoutPlaceholder } from "react-icons/tfi";
import CircleButton from "../components/buttons/circle.button";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { RiRadioButtonLine } from "react-icons/ri";
import ProfilePicture from "../components/user/profile.picture";
import StarRating from "../components/user/star.rating";
import EarningsButton from "../components/buttons/earnings";
import MapComponent from "../components/map/map";
import ButtonStatusIndicator from "../components/bottom.container/status.indicator";
import NewJobAccepted from "../components/common/modals/new.job.accepted";
import { toast } from "sonner";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [jobAccepted, setJobAccepted] = useState(false);

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

  const handleTest = () => {
    toast.info("This feature is coming soon!");
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="flex flex-col h-screen">
          {jobAccepted ? <NewJobAccepted /> : ""}
          <div className="flex w-full justify-between items-center">
            <EarningsButton onClick={handleTest} />
            <div className="flex-col m-2 items-center justify-center">
              <ProfilePicture />
              <StarRating />
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <MapComponent />
          </div>
          <div className="h-1/2 z-auto">
            <SwitchButton setOnlineStatus={setOnlineStatus} />
            <BottomContainer>
              <div className="flex flex-col z-auto gap-2">
                {onlineStatus ? (
                  <ButtonStatusIndicator
                    status={"You're now online"}
                    icon={<RiRadioButtonLine />}
                    color={"text-green-400"}
                  />
                ) : (
                  ""
                )}
                <ButtonContainer>
                  <CircleButton
                    icon={<TfiLayoutPlaceholder />}
                    text={"coming soon"}
                    onClick={handleSimulate}
                  />
                  <CircleButton
                    icon={<TfiLayoutPlaceholder />}
                    text={"coming soon"}
                    onClick={handleTest}
                  />
                  <CircleButton
                    icon={<RiLightbulbFlashFill className="text-yellow-400" />}
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

export default Home;
