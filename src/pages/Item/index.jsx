import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";
import { itemsApi } from "../../services/api/itemsApi";
import * as Icons from "@tabler/icons-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState(undefined);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  async function fetchItem() {
    try {
      const res = await itemsApi.findItemById(id);
      setItem(res);
    } catch (error) {
      console.log(error.response);
    }
  }

  function minus() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function plus() {
    if (count === 99) return window.alert("Quantidade máxima atingida!");
    setCount(count + 1);
  }

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <>
      <Header />
      <div className="w-full flex flex-col pt-28 lg:pt-32 pb-8">
        <div
          className=" w-fit py-1 pr-2 select-none rounded-full flex items-center gap-2 text-xl mb-3 active:bg-secondary  transition-all"
          onClick={() => navigate(-1)}
        >
          <Icons.IconChevronLeft />
          voltar
        </div>
        <div className="flex flex-col items-center gap-6 ">
          <div className="w-[264px] h-[264px]">
            {item && (
              <img
                src={item.image}
                alt=""
                className={clsx(
                  "object-cover object-center h-full w-full scale-110",
                  {
                    block: item.image,
                  }
                )}
              />
            )}
          </div>
          <p className="font-bold text-3xl w-full text-center text-accent">
            {item && item.name}
          </p>
          <div className="flex max-w-[300px] gap-6 flex-wrap">
            {item &&
              item.ingredients.map((ingredient) => (
                <p
                  key={ingredient.id}
                  className="py-1 px-2 bg-secondary bg-opacity-70 min-w-max rounded-sm"
                >
                  {ingredient.name}
                </p>
              ))}
          </div>
          <div className="flex gap-4">
            <div className="flex items-center text-2xl gap-4 bg-secondary bg-opacity-70 py-1 px-2 rounded-md select-none">
              <Icons.IconMinus onClick={minus} />
              <span>{count < 10 ? "0" + count.toString() : count}</span>
              <Icons.IconPlus onClick={plus} />
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Icons.IconReceipt />
              pedir
              <Icons.IconPointFilled size={10} />
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(item && item.price)}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Item;
