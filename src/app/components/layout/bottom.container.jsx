import React from "react";

const BottomContainer = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-end justify-center">
      <div className="w-full max-w-lg bg-black/20 p-4 rounded-t-xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default BottomContainer;
