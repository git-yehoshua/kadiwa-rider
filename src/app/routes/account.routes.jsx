import React from "react";
import { Route, Routes } from "react-router-dom";
import Settings from "../pages/main/settings";

const AccountRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default AccountRoutes;
