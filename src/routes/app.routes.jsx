import { Route, Routes } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default AppRoutes;
