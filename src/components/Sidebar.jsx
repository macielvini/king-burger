import React from "react";
import * as Icons from "@tabler/icons-react";
import { useAuth } from "../hooks/useAuth";

function Sidebar({ display, hide }) {
  const { logout } = useAuth();

  return (
    <>
      <aside
        data-display={display}
        className="flex flex-1 flex-col w-screen max-w-[400px] h-screen overflow-hidden fixed top-0 left-0 z-50 bg-background touch-none -translate-x-full data-[display=true]:translate-x-0 transition-all lg:hidden"
      >
        <p
          className="flex text-2xl pt-10 pb-5 bg-secondary w-full px-7 items-center gap-3"
          onClick={hide}
        >
          <Icons.IconX size={28} />
          <span>Menu</span>
        </p>
        <div className="flex-1 px-7">
          <input
            type="text"
            placeholder="Busque por nome ou ingrediente"
            className="rounded-md my-9 py-3 px-6 w-full"
          />
          <ul className="font-light text-2xl flex flex-col gap-3 [&>li]:border-b-[2px] [&>li]:border-accent [&>li]:border-opacity-25 [&>li]:py-4">
            <li>Novo prato</li>
            <li onClick={logout}>Sair</li>
          </ul>
        </div>
      </aside>
      <div
        data-display={display}
        onClick={hide}
        className="hidden w-screen h-screen fixed top-0 left-0 z-[40] bg-slate-300 bg-opacity-70 drop-shadow-md data-[display=true]:flex transition-all lg:hidden"
      />
    </>
  );
}

export default Sidebar;
