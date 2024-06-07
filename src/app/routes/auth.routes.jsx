import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../pages/auth/signin";
import Signup from "../pages/auth/signup";
import ForgotPassword from "../pages/auth/forgot.password";

const AuthRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === true
  );

  const handleLogin = () => {
    // For simplicity, assume login is successful
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const handleLogout = () => {
    // For simplicity, assume logout is successful
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
  };

  return (
    <Routes>
      <Route path="/" element={<Signin hideLogin={handleLogin} />} />
      <Route path="/register" element={<Signup autoLogin={handleLogin} />} />
      <Route path="/forget-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AuthRoutes;
