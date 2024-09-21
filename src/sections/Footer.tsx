import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.svg?url";
import discord from "@/assets/images/discord.svg?url";
import twitter from "@/assets/images/x-twitter.svg?url";
import youtube from "@/assets/images/youtube.svg?url";

const navItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "Careers",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

const socialItems = [
  {
    icon: discord,
    label: "Discord",
  },
  {
    icon: twitter,
    label: "Twitter",
  },
  {
    icon: youtube,
    label: "YouTube",
  },
];

export const Footer = () => {
  return (
    <footer className="py-24 bg-zinc-950">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Image src={logo} alt="Darkchain logo" />
          </div>
          <nav className="hidden md:flex gap-12">
            {navItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="font-heading font-black text-zinc-500 hover:text-zinc-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="md:flex items-center justify-between mt-12 md:mt-48">
          <p className="text-zinc-400">
            &copy; 2024 Darkchain. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            {socialItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center size-10 bg-zinc-800 rounded-full cursor-pointer hover:bg-zinc-700"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  className="size-5 fill-zinc-500 hover:fill-zinc-400"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
