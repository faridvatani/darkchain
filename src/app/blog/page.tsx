import Link from "next/link";
import { Card } from "@/components/Card";
import { CutCornerButton } from "@/components/CutCornerButton";
import { Hexagon } from "@/components/Hexagon";
import MotionLink from "@/components/MotionLink";
import { Tag } from "@/components/Tag";
import { getLatestPosts } from "@/content/config";
import { BlogPost } from "@/types/types";
import { getPostColorFromCategory } from "@/utils/PostUtils";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest blog posts from Darkchain.",
};

export default async function Blog() {
  const data: BlogPost[] = await getLatestPosts();
  const posts = data.map((post) => post.metadata);
  const latestPost = posts[0];

  return (
    <main>
      <section className="py-24 md:py-32 relative overflow-x-clip">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hexagon size={800} duration={30} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hexagon size={1200} duration={50} reverse />
        </div>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
              Latest Post
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
              {latestPost.title}
            </h1>
            <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
              {latestPost.description}
            </p>
            <div className="flex justify-center mt-10">
              <Link href={`/blog/${latestPost.slug}`}>
                <CutCornerButton>Read More</CutCornerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 md:py-60 bg-zinc-900/30 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8 lg:gap-12">
              {posts.map((post, index) => (
                <MotionLink
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeIn",
                  }}
                  className={twMerge(index % 2 === 0 ? "" : "block md:hidden")}
                >
                  <Card
                    color={getPostColorFromCategory(post.category)}
                    buttonText="Read More"
                  >
                    <Tag color={getPostColorFromCategory(post.category)}>
                      {post.category}
                    </Tag>
                    <h2 className="font-heading font-black text-3xl mt-4">
                      {post.title}
                    </h2>
                    <p className="text-lg mt-6 text-zinc-400">
                      {post.description}
                    </p>
                  </Card>
                </MotionLink>
              ))}
            </div>
            <div className="hidden md:flex flex-col gap-8 lg:gap-12 mt-24">
              {posts.map((post, index) => (
                <MotionLink
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeIn",
                  }}
                  className={twMerge(index % 2 === 0 ? "hidden" : "")}
                >
                  <Card
                    color={getPostColorFromCategory(post.category)}
                    buttonText="Read More"
                  >
                    <Tag color={getPostColorFromCategory(post.category)}>
                      {post.category}
                    </Tag>
                    <h2 className="font-heading font-black text-3xl mt-4">
                      {post.title}
                    </h2>
                    <p className="text-lg mt-6 text-zinc-400">
                      {post.description}
                    </p>
                  </Card>
                </MotionLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
