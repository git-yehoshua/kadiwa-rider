import React, { useEffect, useState } from "react";
import SplashScreen from "../components/common/splash/splash";
import Drawer from "../components/layout/drawer.nav";

const SampleLayout = () => {
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
          <div className="bg-white-50 h-screen">
            {/* //main layout */}
            <div className="flex flex-col">
              <div className="flex bg-gray-100 h-20">Header</div>
              <div className="flex">
                <div className="flex w-[80%] items-center justify-center min-h-screen bg-blue-100">
                  <span>80%</span>
                </div>
                <div className="flex w-[20%] items-center justify-center min-h-screen bg-red-100">
                  <span>20%</span>
                </div>
              </div>
            </div>
          </div>
          <Drawer />
        </div>
      )}
    </>
  );
};

export default SampleLayout;
