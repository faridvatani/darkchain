"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { CutCornerButton } from "@/components/CutCornerButton";
import { Hexagon } from "@/components/Hexagon";
import { CircularOutline } from "@/components/CircularOutline";
import cuboid from "@/assets/images/cuboid.png";
import cylinder from "@/assets/images/cylinder.png";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);
  return (
    <section ref={sectionRef} className="py-60 overflow-hidden">
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} duration={50} reverse />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CircularOutline className="absolute left-0 -top-[400px]" animate>
              <motion.div
                style={{
                  rotate,
                }}
              >
                <Image
                  src={cuboid}
                  alt="Cuboid 3D Image"
                  className="size-[140px]"
                />
              </motion.div>
            </CircularOutline>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CircularOutline
              className="absolute -left-[600px] -top-[70px]"
              animate
            >
              <motion.div
                style={{
                  rotate,
                }}
              >
                <Image
                  src={cylinder}
                  alt="Cylinder 3D Image"
                  className="size-[140px]"
                />
              </motion.div>
            </CircularOutline>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">
            Start building using blockchain technology, with Darkchain.
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};
