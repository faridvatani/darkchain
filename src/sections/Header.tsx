"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg?url";
import CutCorner from "@/assets/images/cut-corner.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div>
            <Image src={logo} alt="Darkchain logo" />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide hidden md:inline-flex">
              <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div>
              <CutCorner className="absolute top-0 right-0 text-fuchsia-500" />
              <span className="leading-6">Get Started</span>
            </button>
            <div className="relative size-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
