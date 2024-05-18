import React from "react";

const ButtonContainer = ({ children }) => {
  return (
    <div className="flex w-full bg-white font-semibold text-gray-400 bottom-0 rounded-xl shadow-lg py-3 px-4 items-center justify-between gap-2">
      {children}
    </div>
  );
};

export default ButtonContainer;
