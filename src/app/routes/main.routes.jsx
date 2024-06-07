import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/main/home.screen";
import TransactionPage from "../pages/main/transaction.page";
import QRScanner from "../pages/scan";
import BookingsPage from "../pages/main/bookings.page";
import ConfirmPickupDropoff from "../pages/sub/confirm.pickup.dropoff";
import ConfirmAcceptOrder from "../pages/sub/confirm.accept.order";
import ProfilePage from "../pages/user/profile.page";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/:transactionId/transaction"
          element={<TransactionPage />}
        />
        <Route path="/scan" element={<QRScanner />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/confirm/:bookingId" element={<ConfirmAcceptOrder />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
