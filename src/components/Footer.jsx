import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="w-screen h-20 bg-secondary flex items-center justify-center self-end">
      <div className="max-w-screen-lg md:px-20 lg:px-16 xl:px-0 px-6 w-full flex justify-between">
        <Logo size="xs" />
        <p>
          2023 - <span className="sm:inline hidden">Projeto criado por </span>
          <a
            className="underline underline-offset-4 font-bold"
            href="https://github.com/macielvini/"
            target="_blank"
          >
            Vinicius Maciel
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
