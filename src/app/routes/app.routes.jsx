import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRScanner from "../pages/scan";
import Home from "../pages/home.screen";
import TransactionPage from "../pages/transaction.page";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/scan" element={<QRScanner />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
