import { Route, Routes } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Item from "../pages/Item";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Item />} />
    </Routes>
  );
}

export default AppRoutes;
