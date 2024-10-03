import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { BlogPost, Post } from "@/types/types";

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const posts = await fs.readdir("src/content/blog/");

  return Promise.all(
    posts
      .filter(
        (file) => path.extname(file) === ".md" || path.extname(file) === ".mdx",
      )
      .map(async (file) => {
        const filePath = `src/content/blog/${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.pubDate === undefined) {
          return null;
        }

        return {
          metadata: { ...data } as Post,
          body: content,
        } as BlogPost;
      }),
  ).then((posts) => {
    return posts
      .filter((post) => post !== null)
      .sort(
        (a, b) =>
          new Date(b.metadata.pubDate).getTime() -
          new Date(a.metadata.pubDate).getTime(),
      );
  });
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.metadata.slug === slug);
}

export default getPosts;
