import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainRoutes from "./main.routes";
import AuthRoutes from "./auth.routes";
import BookingForm from "../pages/test/booking.input";
import { createBooking } from "../services/actions/booking.actions";

function AppRoute() {
  const [bookings, setBookings] = useState([]);
  const handleCreateBooking = async (formData) => {
    try {
      const result = await createBooking(formData);
      if (result) {
        console.log("Booking created successfully with ID:", result.bookingId);
        console.log("Booking details:", result.newBookingDetails);
        // Add logic to update state or display the booking details
      } else {
        console.error("Failed to create booking.");
        // Handle error scenario
      }
    } catch (error) {
      console.error("Error creating booking: ", error);
      // Handle error scenario
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthRoutes />} />
        <Route path="/main/*" element={<MainRoutes />} />
        <Route
          path="/test.book"
          element={<BookingForm onCreateBooking={handleCreateBooking} />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoute;
