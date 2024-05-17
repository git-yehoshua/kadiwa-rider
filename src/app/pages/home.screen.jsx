import React, { useEffect, useState } from "react";
import SplashScreen from "../components/common/splash/splash";
import BottomContainer from "../components/layout/bottom.container";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

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
        <div>
          Home
          <BottomContainer>
            <div className="h-56">Components here</div>
          </BottomContainer>
        </div>
      )}
    </>
  );
};

export default Home;
