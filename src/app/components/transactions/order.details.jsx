import React from "react";
import OrderDetailsHeader from "./order.details.header";

const OrderDetails = ({ order, onBack }) => {
  return (
    <div className="fixed bg-white z-10 inset-0 h-full">
      <OrderDetailsHeader onBack={onBack} />
      <div className="flex items-start justify-center h-screen overflow-y-scroll">
        <div className="flex flex-col items-center justify-center w-full max-w-lg   p-6">
          {order ? (
            <>
              <div className="w-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Order ID: {order.id}
                  </h3>
                  <p>Status: {order.status}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Customer Information
                  </h3>
                  <p>Name: {order.customer.name}</p>
                  <p>Phone: {order.customer.phone}</p>
                  <p>Address: {order.address}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Items</h3>
                  <ul className="list-disc list-inside">
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} - {item.quantity} x ${item.price}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Total</h3>
                  <p>${order.total}</p>
                </div>
              </div>
              <div className="w-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Order ID: {order.id}
                  </h3>
                  <p>Status: {order.status}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Customer Information
                  </h3>
                  <p>Name: {order.customer.name}</p>
                  <p>Phone: {order.customer.phone}</p>
                  <p>Address: {order.address}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Items</h3>
                  <ul className="list-disc list-inside">
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} - {item.quantity} x ${item.price}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Total</h3>
                  <p>${order.total}</p>
                </div>
              </div>
              <div className="w-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Order ID: {order.id}
                  </h3>
                  <p>Status: {order.status}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Customer Information
                  </h3>
                  <p>Name: {order.customer.name}</p>
                  <p>Phone: {order.customer.phone}</p>
                  <p>Address: {order.address}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Items</h3>
                  <ul className="list-disc list-inside">
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} - {item.quantity} x ${item.price}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Total</h3>
                  <p>${order.total}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-semibold text-2xl text-gray-800">
                    Order Details
                  </h1>
                  <p className="text-gray-500">No order details available</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
