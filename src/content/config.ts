import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, Post } from "@/types/types";

const contentDirectory = path.join(process.cwd(), "src/content/blog");

// Get the latest blog posts
export async function getLatestPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(contentDirectory);
  const posts = files.map((fileName) => {
    const filePath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      metadata: data as Post,
      content,
      fileName,
    };
  });

  // Sort posts by pubDate in descending order
  posts.sort((a, b) => {
    if (a.metadata.pubDate.valueOf() === b.metadata.pubDate.valueOf()) return 0;
    return a.metadata.pubDate.valueOf() > b.metadata.pubDate.valueOf() ? -1 : 1;
  });

  return posts;
}
