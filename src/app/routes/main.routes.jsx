import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/main/home.screen";
import TransactionPage from "../pages/main/transaction.page";
import QRScanner from "../pages/scan";
import BookingsPage from "../pages/main/bookings.page";
import ConfirmPickupDropoff from "../pages/sub/confirm.pickup.dropoff";
import ConfirmAcceptOrder from "../pages/sub/confirm.accept.order";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/:transactionId/transaction"
          element={<TransactionPage />}
        />
        <Route path="/scan" element={<QRScanner />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/confirm/:bookingId" element={<ConfirmAcceptOrder />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
