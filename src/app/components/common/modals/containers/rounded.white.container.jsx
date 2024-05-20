import React from "react";

const RoundedWhiteContainer = ({ children }) => {
  return (
    <div className="flex w-full bg-white shadow-md m-1 rounded-md p-2">
      {children}
    </div>
  );
};

export default RoundedWhiteContainer;
