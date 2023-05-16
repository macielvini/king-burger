import React, { useState } from "react";
import Logo from "./Logo";
import * as Icons from "@tabler/icons-react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Header({ cartCount = 0 }) {
  const [search, setSearch] = useState("");
  const { clearStorage } = useAuth();

  function onEnter(e) {
    if (e.key === "Enter") {
      window.alert("Pesquisar: " + e.target.value);
    }
  }

  function logout() {
    const sure = window.confirm("Sair da sua conta?");
    if (sure) {
      clearStorage();
    }
  }

  return (
    <header className="w-screen h-24 flex justify-center items-center bg-secondary fixed top-0 left-0 px-6 lg:px-28 lg:h-28">
      <div className="w-full max-w-screen-xl flex justify-between gap-8 items-center">
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
        <button className="lg:btn-primary relative lg:font-normal lg:flex max-w-fit lg:px-6 lg:py-3 lg:rounded-md">
          <Icons.IconReceipt />
          <span className="hidden lg:block">{`Pedidos (${cartCount})`}</span>
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
