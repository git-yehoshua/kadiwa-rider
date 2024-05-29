import React, { useState } from "react";

const BookingForm = ({ onCreateBooking }) => {
  const [formState, setFormState] = useState({
    owner: "",
    pickup: "",
    dropoff: "",
    details: "",
    status: "Pending",
    rider: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateBooking(formState);
    setFormState({
      owner: "",
      pickup: "",
      dropoff: "",
      details: "",
      status: "Pending",
      rider: "",
      price: 0,
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md"
      >
        <input
          type="text"
          name="owner"
          placeholder="Owner"
          value={formState.owner}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="pickup"
          placeholder="Pickup"
          value={formState.pickup}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="dropoff"
          placeholder="Dropoff"
          value={formState.dropoff}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="details"
          placeholder="Details"
          value={formState.details}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="rider"
          placeholder="Rider"
          value={formState.rider}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="" className="text-gray-400">
          Price
        </label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formState.price}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Create Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
