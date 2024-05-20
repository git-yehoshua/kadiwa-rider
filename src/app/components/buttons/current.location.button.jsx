import React from "react";
import { BiCurrentLocation } from "react-icons/bi";

const CurrentLocationButton = ({ locateUser }) => {
  return (
    <div className="absolute z-[1999] right-[2%] bottom-[5%]">
      <button
        className="flex w-full items-center justify-center p-2  border-2 border-green-100 bg-green-50 text-green-500 font-semibold hover:bg-green-100 rounded-full transition-all duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-100 shadow-md"
        onClick={locateUser}
      >
        <BiCurrentLocation size={30} />
      </button>
    </div>
  );
};

export default CurrentLocationButton;
