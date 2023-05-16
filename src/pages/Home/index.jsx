import React, { useState } from "react";
import Header from "../../components/Header";

function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Header cartCount={cartCount} />
      <div className="pt-32">item</div>
    </>
  );
}

export default Home;
