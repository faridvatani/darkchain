"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pill from "@/assets/images/pill.png";
import cuboid from "@/assets/images/cuboid.png";
import cone from "@/assets/images/cone.png";
import icosahedron from "@/assets/images/icosahedron.png";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";

const CardData = [
  {
    image: pill,
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.",
    color: "fuchsia",
  },
  {
    image: cuboid,
    title: "Decentralized Data Solutions",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    color: "lime",
  },
  {
    image: cone,
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern bloackchain needs.",
    color: "cyan",
  },
  {
    image: icosahedron,
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

export const FeaturesCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  useEffect(() => {
    if (isHovered) return;
    const timeoute = setTimeout(() => {
      setSelectedCardIndex((prev) => (prev + 1) % CardData.length);
    }, 4000);

    return () => clearTimeout(timeoute);
  }, [selectedCardIndex, isHovered]);
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the future of blockchain with Darkchain.
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {CardData.map((card, index) => (
              <div
                key={index}
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Card color={card.color} className="max-w-xs md:max-w-md">
                  <div className="flex justify-center -mt-20">
                    <div className="relative inline-flex">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-3xl mt-12">
                    {card.title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-4">
                    {card.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="inline-flex gap-4 p-2.5 bg-zinc-950 rounded-full">
            {CardData.map((_, i) => (
              <div
                key={i}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  i === selectedCardIndex && "bg-zinc-300",
                )}
                onClick={() => setSelectedCardIndex(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
