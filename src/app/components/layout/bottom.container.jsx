import React from "react";

const BottomContainer = ({ children }) => {
  return (
    <div className="flex items-end justify-center w-screen bottom-0 relative z-auto">
      <div className="w-full bg-black/5 p-4 rounded-t-xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default BottomContainer;
