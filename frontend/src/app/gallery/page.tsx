import fs from "fs";
import path from "path";
import Image from "next/image";

export default function CollectionsPage() {
  const dir = path.join(process.cwd(), "public/images/collections");

  const images = fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file));

  return (
    <div className="min-h-screen bg-[#f8f8f8] px-4 py-20">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide text-gray-800">
          Our Collection
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          A curated gallery of handcrafted wooden furniture
        </p>
      </div>
      {/* Catalogue CTA */}
      <div className="max-w-7xl mx-auto mb-14">
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Explore Our Complete Catalogue
            </h2>
            <p className="text-gray-500 mt-2">
              View or download our full furniture catalogue with all designs,
              dimensions, and customization options.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="/catalogue"
              className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
            >
              View Catalogue
            </a>

            <a
              href="/catalogues/bhanwarwoods-collection.pdf"
              download
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div
        className="
          max-w-7xl mx-auto
          columns-1 sm:columns-2 md:columns-3 lg:columns-3
          gap-5
          space-y-6
        "
      >
        {images.map((img) => (
          <div
            key={img}
            className="
              break-inside-avoid
              group relative overflow-hidden rounded-xl
              bg-white shadow-sm hover:shadow-xl
              transition-all duration-300
            "
          >
            {/* Image */}
            <Image
              src={`/images/collections/${img}`}
              alt={img}
              width={600}
              height={800}
              className="
                w-full h-auto
                object-cover
                group-hover:scale-105
                transition-transform duration-500
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0
                bg-black/0 group-hover:bg-black/10
                transition
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
