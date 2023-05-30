import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Carrousel from "../../components/Carrousel";
import Footer from "../../components/Footer";
import { itemsApi } from "../../services/api/itemsApi";
import Sidebar from "../../components/Sidebar";

function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [categories, setCategories] = useState([]);

  async function findCategories() {
    try {
      const res = await itemsApi.findCategories();
      setCategories(res);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    findCategories();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center pt-28 lg:pt-32">
        <div className="aspect-video max-w-screen-lg max-h-[600px] rounded-lg overflow-hidden">
          <img
            src="./src/assets/banners/banner1.png"
            alt="banner de comida"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="mt-12 flex flex-col w-full">
          {categories.length > 0
            ? categories.map((c) => (
                <Carrousel title={c.name} key={c.id} id={c.id} />
              ))
            : "Carregando"}
        </div>
      </div>
    </>
  );
}

export default Home;
