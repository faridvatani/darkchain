import { getLatestPosts } from "@/content/config";
import { FeaturesCards } from "@/sections/FeaturesCards";
import { FeaturesGrid } from "@/sections/FeaturesGrid";
import { Hero } from "@/sections/Hero";
import { LatestPosts } from "@/sections/LatestPosts";
import { BlogPost } from "@/types/types";

export default async function Home() {
  const data: BlogPost[] = await getLatestPosts();
  const latestPosts = data.map((post) => post.metadata).slice(0, 4);

  return (
    <main>
      <Hero />
      <FeaturesCards />
      <FeaturesGrid />
      <LatestPosts latestPosts={latestPosts} />
    </main>
  );
}
