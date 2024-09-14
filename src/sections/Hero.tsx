import React from "react";
import Image from "next/image";
import icosahedron from "@/assets/images/icosahedron.png";
import cube from "@/assets/images/cube.png";
import cuboid from "@/assets/images/cuboid.png";
import torus from "@/assets/images/torus.png";
import { Hexagon } from "@/components/Hexagon";
import { CutCornerButton } from "@/components/CutCornerButton";
import { CircularOutline } from "@/components/CircularOutline";

export const Hero = () => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="font-extrabold text-center text-zinc-500 tracking-wider uppercase">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl md:text-5xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl md:text-2xl text-zinc-400 mt-6 max-w-xl mx-auto">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton>Get Started</CutCornerButton>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularOutline className="absolute left-[200px] -top-[900px]">
                <Image
                  src={cube}
                  alt="Cube 3D Image"
                  className="size-[140px]"
                />
              </CircularOutline>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularOutline className="absolute left-[200px] top-[270px]">
                <Image
                  src={cuboid}
                  alt="Cuboid 3D Image"
                  className="size-[140px]"
                />
              </CircularOutline>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularOutline className="absolute -left-[600px] -top-[80px]">
                <Image
                  src={torus}
                  alt="Torus 3D Image"
                  className="size-[140px]"
                />
              </CircularOutline>
            </div>

            <Image
              src={icosahedron}
              alt="background icosahedron"
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
            />
            <Image
              src={icosahedron}
              alt="Icosahedron 3D Image"
              className="w-[500px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-40 md:mt-80">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full animate-bounce"></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};
