import React from "react";
import logo from "../assets/logo/logo.svg";
import clsx from "clsx";

function Logo({ size = "sm" }) {
  return (
    <div
      className={clsx(
        "font-secondary text-accent sm:min-w-max font-bold flex items-center",
        { "text-xl gap-3": size === "sm" },
        { "text-4xl md:text-5xl gap-4": size === "lg" },
        { "text-sm leading-tight gap-2": size === "xs" }
      )}
    >
      <img
        src={logo}
        alt="logo"
        className={clsx(
          "h-6",
          { "h-6": size === "sm" },
          { "md:h-16 h-10": size === "lg" }
        )}
      />
      <p>KING BURGER</p>
    </div>
  );
}

export default Logo;
