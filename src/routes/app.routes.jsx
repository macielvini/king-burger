import { Route, Routes } from "react-router-dom";

import React, { useState } from "react";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function AppRoutes() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Sidebar display={sidebar} hide={() => setSidebar(false)} />
      <main className="bg-background min-h-screen max-w-screen-lg m-auto text-ink px-6 md:px-20 lg:px-16 xl:px-0 grid grid-cols-1 justify-items-center relative">
        <Header showSidebar={() => setSidebar(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default AppRoutes;
