import React, { useEffect, useState } from "react";
import SplashScreen from "../components/common/splash/splash";
import BottomContainer from "../components/layout/bottom.container";
import SwitchButton from "../components/buttons/switch.button";
import AutoAcceptStat from "../components/bottom.container/auto.accept.stat";
import ButtonContainer from "../components/layout/button.container";
import MapComponent from "../components/map/map";
import { FaCarRear } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import CircleButton from "../components/buttons/circle.button";
import { RiLightbulbFlashFill } from "react-icons/ri";
import ProfilePicture from "../components/user/profile.picture";
import StarRating from "../components/user/star.rating";
import EarningsButton from "../components/buttons/earnings";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [buttons, setButtons] = useState([
    { id: 1, icon: FaCarRear },
    { id: 2, icon: FaCarRear },
    { id: 3, icon: FaCarRear },
    { id: 4, icon: FaCarRear },
  ]);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="flex flex-col h-screen">
          <div className="flex w-full justify-between items-center">
            <EarningsButton />
            <div className="flex-col m-2 items-center justify-center">
              <ProfilePicture />
              <StarRating />
            </div>
          </div>
          <div className="flex items-center justify-center h-full bg-red-50">
            <MapComponent />
          </div>
          <div className="h-1/2 z-auto">
            <SwitchButton />
            <BottomContainer>
              <div className="flex flex-col z-auto gap-2">
                <AutoAcceptStat />
                <ButtonContainer>
                  <CircleButton
                    icon={<FaCarRear size={20} />}
                    text={"Service Types"}
                  />
                  <CircleButton
                    icon={<MdOutlineWork size={20} />}
                    text={"Working Capital"}
                  />
                  <CircleButton
                    icon={
                      <RiLightbulbFlashFill
                        size={20}
                        className="text-yellow-400"
                      />
                    }
                    text={"Auto Accept"}
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
