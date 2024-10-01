"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.svg?url";
import { CutCornerButton } from "@/components/CutCornerButton";
import Link from "next/link";
import { Hexagon } from "@/components/Hexagon";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
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
              <div
                className="relative size-10 cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-5 h-0.5 bg-zinc-300 -translate-y-1 transition-all duration-500",
                      isOpen && "-translate-y-0 rotate-45",
                    )}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-5 h-0.5 bg-zinc-300 translate-y-1 transition-all duration-500",
                      isOpen && "translate-y-0 -rotate-45",
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed size-full top-0 left-0 z-30 bg-zinc-900"
          >
            <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28 z-0">
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <Hexagon size={700} />
              </div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <Hexagon size={1100} />
              </div>
              <div className="h-full flex items-center justify-center">
                <nav className="flex flex-col items-center gap-12 md:gap-16">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 * index }}
                    >
                      <Link href={link.href}>
                        <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300">
                          {link.title}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
