"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  thumbnail: string;
  category: string;
  content: string; // full content
}

// Add your full blog content here
const blogData: Blog[] = [
  {
    id: 1,
    title: "Modern Furniture Trends 2025",
    excerpt: "Discover the latest trends in modern furniture design...",
    author: "Mahendra Suryawanshi",
    date: "2025-10-02",
    thumbnail: "https://via.placeholder.com/800x400?text=Furniture+Trends",
    category: "Furniture",
    content: `
Modern furniture is evolving rapidly in 2025. Minimalism, multifunctional pieces, and sustainable materials are leading the trend.
1. Minimalism: Less is more. Clean lines and neutral tones dominate interiors.
2. Multifunctional furniture: Foldable tables, modular sofas, and smart storage solutions.
3. Sustainable materials: Bamboo, recycled wood, and eco-friendly fabrics are widely used.
4. Color trends: Earthy tones with accents of green and blue.
5. Technology integration: Smart lighting and furniture with built-in charging ports.

Stay ahead by following these trends for a stylish and functional home.
    `,
  },
  {
    id: 2,
    title: "How to Choose the Perfect Sofa",
    excerpt: "A complete guide on selecting the perfect sofa...",
    author: "Mahendra Suryawanshi",
    date: "2025-09-28",
    thumbnail: "https://via.placeholder.com/800x400?text=Sofa+Guide",
    category: "Guides",
    content: `
Choosing the perfect sofa depends on your space, style, and comfort preferences.
- Measure your space accurately.
- Choose the right fabric for durability.
- Consider the sofa style: sectional, L-shape, or traditional.
- Pay attention to comfort: cushions, seat depth, and back support.
- Match your home decor style.

A well-chosen sofa enhances both aesthetics and comfort in your living room.
    `,
  },
  {
    id: 3,
    title: "Sustainable Materials for Modern Homes",
    excerpt: "Learn about eco-friendly and sustainable materials...",
    author: "Mahendra Suryawanshi",
    date: "2025-09-20",
    thumbnail: "https://via.placeholder.com/800x400?text=Sustainable+Materials",
    category: "Sustainability",
    content: `
Sustainability is key in modern home design. Using eco-friendly materials reduces environmental impact.
- Bamboo: fast-growing, renewable, strong.
- Reclaimed wood: gives character and reduces deforestation.
- Recycled metals: durable and environmentally responsible.
- Organic fabrics: cotton, linen, hemp.

Incorporate these materials for stylish and eco-conscious interiors.
    `,
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = Number(params.id);
  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="py-12 text-center text-gray-600 dark:text-gray-300">
        Blog not found.
        <br />
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline mb-4 inline-block"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {blog.title}
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-4 block">
          {blog.category} | {new Date(blog.date).toLocaleDateString()} | By{" "}
          {blog.author}
        </span>
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
        />

        <div className="prose dark:prose-invert max-w-full text-gray-700 dark:text-gray-300">
          {blog.content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
