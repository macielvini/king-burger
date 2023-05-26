import React, { useState } from "react";
import Logo from "./Logo";
import * as Icons from "@tabler/icons-react";
import clsx from "clsx";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Header({ cartCount = 0 }) {
  const [search, setSearch] = useState("");
  const { clearStorage } = useAuth();
  const navigate = useNavigate();

  function onEnter(e) {
    if (e.key === "Enter") {
      window.alert("Pesquisar: " + e.target.value);
    }
  }

  function logout() {
    const sure = window.confirm("Sair da sua conta?");
    if (sure) {
      clearStorage();
      navigate("/");
      navigate(0);
    }
  }

  return (
    <header className="w-screen h-24 flex justify-center items-center bg-secondary fixed top-0 left-0 lg:h-28 z-10">
      <div className="w-full lg:min-w-[896px] max-w-screen-lg flex justify-between gap-8 items-center mx-6 md:mx-20">
        <Icons.IconMenu2 className="h-5 lg:hidden" />
        <Link to={"/"}>
          <Logo size="sm" />
        </Link>
        <span className="hidden lg:flex items-center justify-center gap-3 w-full h-11 rounded-md bg-background px-6">
          <Icons.IconSearch />
          <input
            className="bg-transparent w-full focus:outline-none focus:border-none"
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyUp={(e) => onEnter(e)}
          />
        </span>
        <button className="md:btn-primary relative md:font-normal md:flex max-w-fit md:px-6 md:py-3 md:rounded-md">
          <Icons.IconReceipt />
          <span className="hidden md:block">{`Pedidos (${cartCount})`}</span>
          <span
            className={clsx(
              "text-sm flex justify-center items-center absolute w-5 h-5 bg-red-700 rounded-full -top-2 -right-2 transition-all lg:hidden",
              { hidden: cartCount <= 0 }
            )}
          >
            {cartCount}
          </span>
        </button>
        <Icons.IconLogout
          onClick={logout}
          size={60}
          className="hidden lg:block"
        />
      </div>
    </header>
  );
}

export default Header;
