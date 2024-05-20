import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

const GetDirectionButton = () => {
  return (
    <button className="flex w-full items-center justify-center p-2 my-4 border-2 border-green-100 bg-green-50 text-green-500 font-semibold hover:bg-green-100 rounded-full transition-all duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-100 shadow-md">
      <FaLocationArrow size={25} />
    </button>
  );
};

export default GetDirectionButton;
