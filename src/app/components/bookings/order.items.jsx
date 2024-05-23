import { truncateText } from "@/utils/helpers/truncate";
import React from "react";

const OrderItems = ({ data }) => {
  const maxTextLength = 25;
  return (
    <>
      {data.map((item) => (
        <div
          className="flex w-full p-4 shadow-md rounded-xl items-start justify-between border-2 border-gray-100 mb-4"
          key={item.id}
        >
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{item.itemName}</span>
            <span className="text-sm text-gray-600">
              Quantity: {item.quantity}
            </span>
            <span className="text-sm text-gray-600">Price: {item.price}</span>
            <span className="text-sm text-gray-600 mt-2">
              <strong>Pickup Address:</strong>
              {truncateText(item.pickupAddress, maxTextLength)}
            </span>
            <span className="text-sm text-gray-600">
              <strong>Dropoff Address:</strong>{" "}
              {truncateText(item.dropoffAddress, maxTextLength)}
            </span>
          </div>
          <button className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600">
            Pick Order
          </button>
        </div>
      ))}
    </>
  );
};

export default OrderItems;
