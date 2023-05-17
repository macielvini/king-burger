import React from "react";
import Card from "./Card";
import styled from "styled-components";
import * as Icons from "@tabler/icons-react";

function Carrousel({ title, cards = [] }) {
  if (cards.length <= 0) {
    return "Carregando";
  }

  return (
    <div className="relative">
      <p className="font-medium text-xl lg:text-3xl">{title}</p>
      <Wrapper className="carrousel flex my-6 overflow-x-auto snap-x gap-4 py-4 pl-4 relative">
        {cards.map((card) => (
          <Card
            key={card.id}
            description={card.description}
            price={card.price}
            title={card.title}
            image={card.image}
          />
        ))}
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
