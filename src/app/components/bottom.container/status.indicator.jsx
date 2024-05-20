import React from "react";
// import { RiLightbulbFlashFill } from "react-icons/ri";

const ButtonStatusIndicator = ({ status, icon, color }) => {
  return (
    <>
      <button className="flex w-full bg-white font-semibold text-gray-400 bottom-0 rounded-xl shadow-lg py-3 px-4 items-center justify-between">
        {status}
        {/* <RiLightbulbFlashFill size={20} className="text-yellow-400 ml-2 " /> */}
        <span className={`${color} ml-2`}>{icon}</span>
      </button>
    </>
  );
};

export default ButtonStatusIndicator;
