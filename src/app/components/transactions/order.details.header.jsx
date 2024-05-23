import React from "react";
import BackButton from "../buttons/back.button";
import { RiMessage3Fill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";

const OrderDetailsHeader = ({ onBack }) => {
  return (
    <div className="flex w-full bg-yellow-500/15 justify-between py-4 text-green-500">
      <div className="flex items-center justify-center">
        <BackButton onBack={onBack} />
        <h1 className="text-xl font-semibold text-gray-700">Order Details</h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button className="p-1">
          <IoIosCall size={25} />
        </button>
        <button className="p-1">
          <RiMessage3Fill size={25} className="scale-x-[-1]" />
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsHeader;
