import React, { useState } from "react";
import Header from "../../components/Header";

function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Header cartCount={cartCount} />
      <div className="px-6 pt-28"></div>
    </>
  );
}

export default Home;
