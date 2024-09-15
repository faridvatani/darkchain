import { FeaturesCards } from "@/sections/FeaturesCards";
import { FeaturesGrid } from "@/sections/FeaturesGrid";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesCards />
      <FeaturesGrid />
    </main>
  );
}
