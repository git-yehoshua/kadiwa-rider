import React from "react";
import { PiHandCoinsFill } from "react-icons/pi";

const EarningsButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex items-center justify-center m-2 py-2 px-4 border-none border-green-400 bg-green-50 text-sm text-green-500 font-semibold hover:bg-green-60 rounded-full transition-all duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-100"
        title="Earnings"
      >
        <PiHandCoinsFill size={20} className="mr-2" />
        Earnings
      </button>
    </div>
  );
};

export default EarningsButton;
