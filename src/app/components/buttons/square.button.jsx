import React from "react";

const SquareButton = ({ onClick, icon, text, title, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-center rounded-md p-2 my-4 border-2 ${
        disabled
          ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
          : "border-green-100 bg-green-50 text-green-500"
      } font-semibold hover:bg-green-60 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-100 shadow-md`}
      title={title}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default SquareButton;
