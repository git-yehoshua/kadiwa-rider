import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/main/home.screen";
import TransactionPage from "../pages/main/transaction.page";
import QRScanner from "../pages/scan";
import BookingsPage from "../pages/main/bookings.page";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/scan" element={<QRScanner />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
