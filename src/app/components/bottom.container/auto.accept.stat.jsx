import React from "react";
import { RiLightbulbFlashFill } from "react-icons/ri";

const AutoAcceptStat = () => {
  return (
    <>
      <button className="flex w-full bg-white font-semibold text-gray-400 bottom-0 rounded-xl shadow-lg py-3 px-4 items-center justify-between">
        Your auto accept is on
        <RiLightbulbFlashFill size={20} className="text-yellow-400 ml-2 " />
      </button>
    </>
  );
};

export default AutoAcceptStat;
