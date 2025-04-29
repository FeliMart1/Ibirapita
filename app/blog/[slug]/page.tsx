/*
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">{post?.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{post?.date}</p>
      <div className="text-lg">{post?.excerpt}</div>
    </main>
  );
}
*/
