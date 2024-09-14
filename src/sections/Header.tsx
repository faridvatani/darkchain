"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg?url";
import { CutCornerButton } from "@/components/CutCornerButton";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div>
            <Image src={logo} alt="Darkchain logo" />
          </div>
          <div className="flex items-center gap-4">
            <CutCornerButton className="hidden md:inline-flex">
              Get Started
            </CutCornerButton>
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
