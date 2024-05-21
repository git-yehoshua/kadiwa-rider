import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../pages/auth/signin";
import Signup from "../pages/auth/signup";
import ForgotPassword from "../pages/auth/forgot.password";

const AuthRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default AuthRoutes;
