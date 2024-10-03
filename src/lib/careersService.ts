import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { Position, Positions } from "@/types/types";

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPositions() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPositions = cache(async (): Promise<Positions[]> => {
  const positions = await fs.readdir("src/content/positions/");

  const positionPromises = positions
    .filter(
      (file) => path.extname(file) === ".md" || path.extname(file) === ".mdx",
    )
    .map(async (file) => {
      const filePath = `src/content/positions/${file}`;
      const positionContent = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(positionContent);

      if (data.pubDate === undefined) {
        return null;
      }

      return {
        metadata: { ...data } as Position,
        body: content,
      } as Positions;
    });

  const resolvedPositions = await Promise.all(positionPromises);
  return resolvedPositions.filter(
    (position): position is Positions => position !== null,
  );
});

export default getPositions;
