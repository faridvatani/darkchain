import Link from "next/link";
import { Card } from "@/components/Card";
import { CutCornerButton } from "@/components/CutCornerButton";
import MotionLink from "@/components/MotionLink";
import { Tag } from "@/components/Tag";
import { getPosts } from "@/lib/blogService";
import { BlogPost } from "@/types/types";
import { getPostColorFromCategory } from "@/utils/PostUtils";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { InteriorContent } from "@/components/InteriorContent";
import { InteriorHero } from "@/components/InteriorHero";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest blog posts from Darkchain.",
};

export default async function Blog() {
  const data: BlogPost[] = await getPosts();
  const posts = data.map((post) => post.metadata);
  const latestPost = posts[0];

  return (
    <main>
      <InteriorHero>
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
      </InteriorHero>
      <InteriorContent>
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
      </InteriorContent>
    </main>
  );
}
