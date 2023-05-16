import React from "react";
import logo from "../assets/logo/logo.svg";
import clsx from "clsx";

function Logo({ size = "sm" }) {
  return (
    <div
      className={clsx(
        "font-secondary text-accent mx-8 min-w-max font-bold flex justify-center items-center",
        { "text-xl gap-2": size === "sm" },
        { "text-4xl md:text-5xl gap-4": size === "lg" }
      )}
    >
      <img
        src={logo}
        alt="logo"
        className={clsx(
          { "h-6": size === "sm" },
          { "md:h-16 h-10": size === "lg" }
        )}
      />
      KING BURGER
    </div>
  );
}

export default Logo;
