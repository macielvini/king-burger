import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import React from "react";
import Success from "../pages/Register/success";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default AuthRoutes;
