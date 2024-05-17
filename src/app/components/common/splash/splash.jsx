import React, { Suspense, lazy } from "react";
import { asset } from "../../../config/asset.config";

// Lazy load the modal component
const SplashModal = lazy(() => import("./splash.modal"));

function SplashScreen() {
  return (
    <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
      <SplashModal>
        <main className="flex items-center justify-center h-screen bg-green-700">
          <div>
            <div className="gap-5">
              <span className="relative flex">
                <div className="relative rounded-full p-3 z-40">
                  <img
                    src={asset.logo.path}
                    alt="App Logo"
                    className="h-44 p-5"
                  />
                </div>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
              </span>
            </div>
            <h1 className="animate-pulse mt-52 text-sm font-bold text-white text-center">
              Please wait...
            </h1>
          </div>
        </main>
      </SplashModal>
    </Suspense>
  );
}

export default SplashScreen;
