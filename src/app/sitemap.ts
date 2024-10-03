import getPosts from "@/lib/blogService";

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// The sitemap function returns an array of objects with the URL and lastModified properties.
// http://localhost:3000/sitemap.xml
export default async function sitemap() {
  const posts = await getPosts();

  const blogs = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.slug}`,
    lastModified: post.metadata.lastModified
      ? new Date(post.metadata.lastModified).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
  }));

  const routes = ["", "/blog", "/careers", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
