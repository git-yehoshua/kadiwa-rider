import React from "react";

const CircleButton = ({ onClick, icon, text, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={onClick}
        className="flex items-center p-2 bg-gray-100 text-gray-600 hover:text-gray-900  rounded-full transition-all duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        title={title}
      >
        {icon && <span>{icon}</span>}
      </button>
      <span className="uppercase text-[12px] my-4">{text}</span>
    </div>
  );
};

export default CircleButton;
