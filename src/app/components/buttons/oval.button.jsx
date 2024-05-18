import React from "react";

const OvalButton = ({ onClick, icon, text, title }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center py-2 px-4 border-2 border-green-400 bg-green-50 text-green-500 font-semibold hover:bg-green-60 rounded-full transition-all duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-60"
      title={title}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default OvalButton;
