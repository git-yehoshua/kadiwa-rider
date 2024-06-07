import React from "react";

const OvalButton = ({ onClick, icon, text, title, type }) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center p-2 my-4 border-2 border-green-100 bg-green-50 text-green-500 font-semibold hover:bg-green-60 rounded-full transition-all duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-100 shadow-md"
      title={title}
      type={type || "button"}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default OvalButton;
