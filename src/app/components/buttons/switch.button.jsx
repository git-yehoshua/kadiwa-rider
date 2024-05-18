import React, { useState } from "react";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

const SwitchButton = () => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnlineStatus = () => {
    setIsOnline((prevStatus) => !prevStatus);
  };

  return (
    <div
      className={`flex m-2 ${
        isOnline ? "items-end justify-end" : "items-center justify-center"
      }`}
    >
      <button
        className={`flex items-center align-middle font-sans font-semibold text-center transition-all  text-xs p-3 rounded-full ${
          isOnline ? "bg-green-400 border border-green-800" : "bg-gray-800"
        } text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
        type="button"
        onClick={toggleOnlineStatus}
      >
        {isOnline ? null : "You're offline"}
        <MdOutlinePowerSettingsNew
          size={23}
          className={` ${isOnline ? "text-white" : "text-green-400 ml-2"}`}
        />
      </button>
    </div>
  );
};

export default SwitchButton;
