import React from "react";

const ItemContainer = ({ children }) => {
  return (
    <div className="flex flex-col w-full p-4 rounded-lg shadow-md border">
      {children}
    </div>
  );
};

export default ItemContainer;
