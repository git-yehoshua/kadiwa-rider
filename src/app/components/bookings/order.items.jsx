import { truncateText } from "@/utils/helpers/truncate";
import React from "react";

const OrderItems = ({ data, onClick }) => {
  const maxTextLength = 50;

  return (
    <>
      {data.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-400 text-center font-semibold">
          No orders available.
        </div>
      ) : (
        <>
          {data.map(({ bookingId, bookingDetails }) => {
            // Calculate total price for the booking
            const totalPrice = bookingDetails.items.reduce((sum, item) => {
              return sum + item.qty * parseFloat(item.price);
            }, 0);

            return (
              <button
                className="flex w-full p-4 shadow-md rounded-xl items-start text-start justify-between border-2 border-gray-100 mb-4 transition-all duration-200 ease-in-out hover:bg-gray-50"
                key={bookingId}
                onClick={() => onClick({ bookingId, bookingDetails })} // Pass the full item object to the onClick function
              >
                <div className="flex flex-col w-full">
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">
                        {bookingDetails.customer.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        Phone: {bookingDetails.customer.phone}
                      </span>
                      <span className="text-sm text-gray-600 mt-2">
                        Total Items:{" "}
                        <strong>{bookingDetails.items.length}</strong>
                      </span>
                    </div>
                    <span className="text-sm text-green-600 mt-2">
                      Total Price:
                      <strong className="text-lg ml-2">
                        ${totalPrice.toFixed(2)}
                      </strong>
                    </span>
                  </div>
                  <hr className="my-2" />
                  <span className="text-sm text-gray-600 mt-2">
                    <strong>Pickup Address:</strong>{" "}
                    {truncateText(
                      bookingDetails.merchant.address,
                      maxTextLength
                    )}
                  </span>
                  <span className="text-sm text-gray-600">
                    <strong>Dropoff Address:</strong>{" "}
                    {truncateText(
                      bookingDetails.customer.address,
                      maxTextLength
                    )}
                  </span>
                </div>
              </button>
            );
          })}
        </>
      )}
    </>
  );
};

export default OrderItems;
