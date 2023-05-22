import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";
import { itemsApi } from "../../services/api/itemsApi";
import * as Icons from "@tabler/icons-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { sleep } from "../../utils/sleep";
import { toast } from "react-hot-toast";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState(undefined);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  async function fetchItem() {
    setIsLoading(true);
    try {
      //SIMULATE API DELAY
      await sleep(1000);
      const res = await itemsApi.findItemById(id);
      setItem(res);
      setIsLoading(false);
    } catch (error) {
      toast.error("Erro ao carregar produto. Voltando a tela inicial...");
      await sleep(2000);
      navigate(-1);
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
      <div className="w-full flex flex-col pt-28 lg:pt-32 pb-8 lg:pb-0">
        <div
          className=" w-fit py-1 pr-2 select-none rounded-full flex items-center gap-2 text-xl mb-3 active:bg-secondary  transition-all"
          onClick={() => navigate(-1)}
        >
          <Icons.IconChevronLeft />
          voltar
        </div>
        <div className="grid justify-center justify-items-center lg:justify-start gap-6 lg:grid-cols-2 content-center lg:items-center">
          <div className="w-full h-[264px] overflow-hidden lg:h-[390px] lg:w-full lg:row-span-4">
            {isLoading ? (
              <div className="aspect-square m-auto h-full rounded-full bg-gray-200 animate-pulse" />
            ) : (
              <img
                src={item.image}
                alt=""
                className={clsx("object-cover h-full w-full", {
                  block: item.image,
                })}
              />
            )}
          </div>
          {isLoading ? (
            <div className="animate-pulse lg:justify-self-start bg-gray-200 w-[220px] h-12 rounded-md" />
          ) : (
            <p className="font-bold text-3xl w-full text-center text-accent lg:text-left lg:text-5xl font-secondary">
              {item && item.name}
            </p>
          )}
          <div className="flex max-w-[300px] gap-3 flex-wrap lg:min-w-full lg:place-items-start">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gray-200 w-[80px] h-8 rounded-sm"
                  />
                ))
              : item.ingredients.map((ingredient) => (
                  <p
                    key={ingredient.id}
                    className="py-1 px-2 bg-secondary bg-opacity-70 min-w-max rounded-sm"
                  >
                    {ingredient.name}
                  </p>
                ))}
          </div>
          <div className="flex gap-4 lg:justify-self-start">
            {isLoading ? (
              <>
                <div className="animate-pulse w-[124px] h-12 bg-gray-200 rounded-md" />
              </>
            ) : (
              <div className="flex items-center text-2xl gap-4 bg-secondary bg-opacity-70 py-1 px-2 rounded-md select-none">
                <Icons.IconMinus onClick={minus} />
                <span>{count < 10 ? "0" + count.toString() : count}</span>
                <Icons.IconPlus onClick={plus} />
              </div>
            )}

            {isLoading ? (
              <>
                <div className="animate-pulse w-[180px] h-12 bg-gray-200 rounded-md" />
              </>
            ) : (
              <button className="btn-primary flex items-center gap-2 max-w-max ">
                <Icons.IconReceipt />
                pedir
                <Icons.IconPointFilled size={10} />
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(item && item.price)}
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Item;
