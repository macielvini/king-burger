import React, { useState } from "react";
import * as Icons from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Card({ path = "", title, description, price, image }) {
  const [count, setCount] = useState(0);

  function minus() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function plus() {
    if (count === 99) return window.alert("Quantidade máxima atingida!");
    setCount(count - 1);
  }

  return (
    <div className="min-w-[210px] h-[308px] lg:min-w-[304px] lg:h-[462px] bg-secondary rounded-lg grid grid-cols-1 place-items-center p-6 drop-shadow-sm gap-3 snap-center">
      <div className=" rounded-full max-w-[100px] h-20 lg:h-[178px] lg:max-w-[230px]">
        <img
          src={image}
          alt=""
          className="pointer-events-none object-cover w-full h-full drop-shadow-md"
        />
      </div>
      <Link
        to={path}
        className="text-center font-medium overflow-hidden whitespace-nowrap overflow-ellipsis w-full lg:font-bold lg:text-2xl"
      >
        {title}
      </Link>
      <p className="hidden lg:block md:block leading-tight text-center text-sm">
        {description}
      </p>
      <p className="font-secondary text-accent text-xl">
        R$ {price.toFixed(2)}
      </p>
      <p className="self-end flex gap-3 bg-background py-1 px-2 rounded-md select-none">
        <Icons.IconMinus onClick={minus} />
        {count < 10 ? "0" + count.toString() : count}
        <Icons.IconPlus onClick={() => setCount(count + 1)} />
      </p>
      <button className="btn-primary self-end py-2">incluir</button>
    </div>
  );
}

export default Card;
