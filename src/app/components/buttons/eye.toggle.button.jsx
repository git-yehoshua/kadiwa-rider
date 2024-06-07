import React from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

const EyeToggleButton = ({ onClick, showPassword }) => {
  return (
    <button
      className="px-2 py-1 border bg-blue-50  rounded-md m-[2px] w-fit transition-all duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
      onClick={onClick}
      type="button"
    >
      {showPassword ? (
        <span>
          <RiEyeCloseLine size={16} />
        </span>
      ) : (
        <span>
          <RiEyeLine size={16} />
        </span>
      )}
    </button>
  );
};

export default EyeToggleButton;
