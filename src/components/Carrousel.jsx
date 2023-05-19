import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import * as Icons from "@tabler/icons-react";
import { itemsApi } from "../services/api/itemsApi";
import { translate } from "../pages/Home/categories.translation";
import { toast } from "react-hot-toast";
import SkeletonCard from "./SkeletonCard";
import { sleep } from "../utils/sleep";

function Carrousel({ id, title }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();

  async function fetchItems() {
    setLoading(true);
    try {
      //SIMULATE API DELAY
      await sleep(1500);
      const res = await itemsApi.findItemsByCategoryId(id);
      setItems(res);
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao carregar produtos.");
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="relative">
      <p className="font-medium text-xl lg:text-3xl">{translate(title)}:</p>
      <Wrapper className="carrousel flex my-6 overflow-x-auto snap-x gap-4 py-4 pl-4 relative">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : items.map((card) => {
              const desc = card.ingredients.map((i) => i.name).join(", ");
              return (
                <Card
                  key={card.id}
                  description={desc}
                  price={card.price}
                  title={card.name}
                  image={card.image}
                />
              );
            })}
      </Wrapper>
      <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 bg-accent text-background rounded-full items-center justify-center h-10 w-10 drop-shadow-md cursor-pointer select-none">
        <Icons.IconChevronLeft size={32} />
      </div>
      <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-0 bg-accent text-background rounded-full items-center justify-center h-10 w-10 drop-shadow-md cursor-pointer select-none">
        <Icons.IconChevronRight size={32} />
      </div>
    </div>
  );
}

export default Carrousel;

const Wrapper = styled.div`
  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;
