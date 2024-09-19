"use client";
import React from "react";
import { Card } from "@/components/Card";
import { Post } from "@/types/types";
import { getPostColorFromCategory } from "@/utils/PostUtils";
import { Tag } from "@/components/Tag";
import { CutCornerButton } from "@/components/CutCornerButton";
import { twMerge } from "tailwind-merge";

interface LatestPostsProps {
  latestPosts: Post[];
}

export const LatestPosts = ({ latestPosts }: LatestPostsProps) => {
  return (
    <section className="py-60">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your portal to everything blockchain.
          </h2>
          <p className="text-xl md:text-2xl text-center text-zinc-400 mt-8">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-28">
          <div className="flex flex-col gap-8">
            {latestPosts.map((post, index) => (
              <Card
                key={index}
                color={getPostColorFromCategory(post.category)}
                className={twMerge((index === 1 || index === 3) && "md:hidden")}
              >
                <Tag color={getPostColorFromCategory(post.category)}>
                  {post.category}
                </Tag>
                <h3 className="font-heading font-black text-3xl mt-3">
                  {post.title}
                </h3>
                <p className="text-lg text-zinc-400 mt-6">{post.description}</p>
              </Card>
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-8 mt-16">
            {latestPosts.map((post, index) => (
              <Card
                key={index}
                color={getPostColorFromCategory(post.category)}
                className={twMerge((index === 0 || index === 2) && "md:hidden")}
              >
                <Tag color={getPostColorFromCategory(post.category)}>
                  {post.category}
                </Tag>
                <h3 className="font-heading font-black text-3xl mt-3">
                  {post.title}
                </h3>
                <p className="text-lg text-zinc-400 mt-6">{post.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};
