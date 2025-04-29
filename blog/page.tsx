// app/blog/[slug]/page.tsx
/*
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: `url('${post.image}')` }}>
        <div className="bg-black/50 absolute inset-0"></div>
        <h1 className="relative text-4xl font-bold z-10">{post.title}</h1>
      </section>

      <section className="p-8 max-w-4xl mx-auto">
        <p className="text-lg mb-4">{post.content}</p>
      </section>
    </div>
  );
}

// 🔧 Esta función es esencial para las rutas dinámicas en Next.js App Router
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

*/
