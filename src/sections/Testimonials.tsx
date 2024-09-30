"use client";
import React from "react";
import Image from "next/image";
import Avatar1 from "@/assets/images/avatar-erica-wyatt.jpg";
import Avatar2 from "@/assets/images/avatar-noel-baldwin.jpg";
import Avatar3 from "@/assets/images/avatar-harry-bender.jpg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonialsItems = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help.Highly recommended!",
    name: "Erica Wyatt",
    title: "Product Manager - BlockLink",
    avatarImage: Avatar1,
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. It's a game-changer for our team.",
    name: "Noel Baldwin",
    title: "Lead Developer - BitBridge",
    avatarImage: Avatar2,
  },
  {
    text: "The integration process was seamless, and the performance improvements are beyond our expectations.",
    name: "Harry Bendor",
    title: "CTO - CryptoSolutions",
    avatarImage: Avatar3,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 xl:gap-12">
          {testimonialsItems.map((item, index) => (
            <motion.blockquote
              key={index}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: index * 0.5,
                ease: "easeInOut",
              }}
              viewport={{
                once: true,
              }}
              className={twMerge(index === 2 && "md:hidden lg:block")}
            >
              <p className="font-heading font-black text-3xl lg:text-4xl">
                &ldquo;{item.text}&rdquo;
              </p>
              <cite className="block mt-8">
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src={item.avatarImage}
                      alt={`${item.name} avatar`}
                      className="size-16 bg-zinc-700 bg-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-lg not-italic font-black">
                      {item.name}
                    </span>
                    <div className="text-zinc-400 not-italic">{item.title}</div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
