import { getPosts } from "@/lib/blogService";
import { FeaturesCards } from "@/sections/FeaturesCards";
import { FeaturesGrid } from "@/sections/FeaturesGrid";
import { Hero } from "@/sections/Hero";
import { LatestPosts } from "@/sections/LatestPosts";
import { Post } from "@/types/types";

export default async function Home() {
  const posts = await getPosts();
  const latestPosts = posts.map((post) => post.metadata).slice(0, 4) as Post[];

  return (
    <main>
      <Hero />
      <FeaturesCards />
      <FeaturesGrid />
      <LatestPosts latestPosts={latestPosts} />
    </main>
  );
}
