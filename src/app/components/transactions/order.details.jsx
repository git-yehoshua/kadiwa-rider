import React from "react";
import HeaderContainer from "../layout/header.container";
import BackButton from "../buttons/back.button";

const OrderDetails = ({ order, onBack }) => {
  // Calculate total price if it's not provided
  const calculateTotal = (items) => {
    return items
      .reduce((total, item) => total + item.qty * item.price, 0)
      .toFixed(2);
  };

  const total = order.total ?? calculateTotal(order.items);

  return (
    <div className="fixed bg-white z-10 inset-0 h-full">
      <HeaderContainer>
        <div className="flex w-full">
          <div className="absolute text-green-600">
            <BackButton onBack={onBack} />
          </div>
          <h1 className="flex w-full items-center justify-center text-green-600 font-semibold">
            Order Details
          </h1>
        </div>
      </HeaderContainer>
      <div className="flex items-start justify-center h-screen overflow-y-scroll mt-16">
        <div className="flex flex-col items-center justify-center w-full p-6">
          {order ? (
            <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
                <p className="text-gray-600">Status: {order.status}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Customer Information</h3>
                <p className="text-gray-600">Name: {order.customer.name}</p>
                <p className="text-gray-600">Phone: {order.customer.phone}</p>
                <p className="text-gray-600">
                  Address: {order.customer.address}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Items</h3>
                <ul className="list-none">
                  {order.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-gray-600"
                    >
                      <span>
                        {item.name} - {item.qty} x ₱{item.price}
                      </span>
                      {/* <span>₱{item.qty * item.price}</span> */}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-2 border-gray-300 mt-4 pt-4">
                <h3 className="text-lg font-semibold">Total</h3>
                <p className="text-gray-800 font-bold text-xl">₱{total}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-screen">
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold text-2xl text-gray-800">
                  Order Details
                </h1>
                <p className="text-gray-500">No order details available</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
