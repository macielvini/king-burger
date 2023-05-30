import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="w-full h-20 bg-secondary flex items-center justify-center self-end">
      <div className="w-full flex justify-between p-body">
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
