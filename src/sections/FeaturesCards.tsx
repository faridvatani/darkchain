import React from "react";
import Image from "next/image";
import pill from "@/assets/images/pill.png";
import cuboid from "@/assets/images/cuboid.png";
import cone from "@/assets/images/cone.png";
import icosahedron from "@/assets/images/icosahedron.png";
import ArrowRight from "@/assets/images/arrow-long-right.svg";
import { twMerge } from "tailwind-merge";
import { TextButton } from "@/components/TextButton";

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
    desciprtion:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

export const FeaturesCards = () => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the future of blockchain with Blockforge.
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {CardData.map((card, index) => (
              <div
                key={index}
                className="relative z-0 p-8 md:p-10 max-w-xs md:max-w-md group"
              >
                <div
                  className={twMerge(
                    "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
                    card.color === "lime" && "bg-lime-500",
                    card.color === "cyan" && "bg-cyan-500",
                    card.color === "violet" && "bg-violet-500",
                  )}
                ></div>
                <div
                  className={twMerge(
                    "absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10",
                    card.color === "lime" &&
                      "bg-lime-500 group-hover:bg-lime-400",
                    card.color === "cyan" &&
                      "bg-cyan-500 group-hover:bg-cyan-400",
                    card.color === "violet" &&
                      "bg-violet-500 group-hover:bg-violet-400",
                  )}
                ></div>
                <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
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
                <p className="text-lg text-zinc-400 mt-4">{card.description}</p>
                <div className="flex justify-between mt-12">
                  <TextButton color={card.color}>Learn More</TextButton>
                  <ArrowRight className="stroke-2 size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="inline-flex gap-4 p-2.5 bg-zinc-950 rounded-full">
            {CardData.map((_, i) => (
              <div
                key={i}
                className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
