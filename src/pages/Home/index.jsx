import React, { useState } from "react";
import Header from "../../components/Header";
import banner from "../../assets/banners/banner1.png";

function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="">
      <Header cartCount={cartCount} />
      <div className="aspect-video max-w-screen-lg rounded-lg overflow-hidden">
        <img
          src="./src/assets/banners/banner1.png"
          alt="banner de comida"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}

export default Home;
