import { InteriorContent } from "@/components/InteriorContent";
import { InteriorHero } from "@/components/InteriorHero";
import { Tag } from "@/components/Tag";
import getPosts, { getPost } from "@/lib/blogService";
import { getColorFromCategory } from "@/utils/utils";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.metadata.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getPosts();
  const post = posts.find((post) => post.metadata.slug === params.slug);
  if (!post) return notFound();

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      site: "@site",
      title: post.metadata.title,
      description: post.metadata.description,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  const {
    title,
    category,
    description,
    author: { name, title: authorTitle },
  } = post.metadata;

  return (
    <section>
      <InteriorHero>
        <div className="relative">
          <div className="flex justify-center">
            <Tag color={getColorFromCategory(category)}>{category}</Tag>
          </div>
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
            {title}
          </h1>
          <p className="text-xl text-center mt-8 text-zinc-400 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col items-center mt-8">
            <div className="size-16 rounded-full bg-zinc-700 bg-cover bg-center"></div>
            <div className="font-extrabold text-lg mt-3">{name}</div>
            <div className="text-zinc-500">{authorTitle}</div>
          </div>
        </div>
      </InteriorHero>
      <InteriorContent>
        <div className="prose prose-invert prose-lg mx-auto prose-zinc prose-headings:font-heading prose-headings:font-black prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:lg:text-5xl prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:lg:text-4xl">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </InteriorContent>
    </section>
  );
}
