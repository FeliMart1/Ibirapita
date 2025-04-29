import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/blog-hero.jpg')" }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <h1 className="relative text-4xl font-bold z-10">Últimas Novedades</h1>
      </section>

      {/* Lista de Posts */}
      <section className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestro Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-700 mt-2">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-blue-600 hover:underline">
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

