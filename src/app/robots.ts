import { baseUrl } from "./sitemap";

// The robots function returns an object with the rules, sitemap, and host properties.
// http://localhost:3000/robots.txt
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
