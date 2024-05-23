import React from "react";

const BottomContainer = ({ children }) => {
  return (
    <div className="flex h-full">
      <div className="fixed bottom-0">
        <div className="flex items-end justify-center w-screen bottom-0 relative z-auto">
          <div className="w-full bg-gray-800/50 p-4 rounded-t-3xl shadow-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomContainer;
