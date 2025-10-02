export default function AboutPage() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/1200x400?text=Modern+Furniture+Design"
          alt="Furniture Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            About FurnitureStore
          </h1>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          At FurnitureStore, we aim to transform homes with modern, sustainable,
          and durable furniture that blends comfort with style. Our passion is
          creating pieces that make your living spaces feel extraordinary.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-4xl">🪑</div>
          <h3 className="font-semibold">Quality Furniture</h3>
          <p className="text-gray-600 text-sm">
            Handpicked materials for long-lasting use.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-4xl">🚚</div>
          <h3 className="font-semibold">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">
            Quick and safe shipping to your doorstep.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-4xl">💡</div>
          <h3 className="font-semibold">Modern Design</h3>
          <p className="text-gray-600 text-sm">
            Trendy, stylish, and functional pieces.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-4xl">🌱</div>
          <h3 className="font-semibold">Sustainable</h3>
          <p className="text-gray-600 text-sm">
            Eco-friendly materials and processes.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Ready to transform your space?
        </h2>
        <p className="text-gray-700 mt-2">
          Explore our wide range of modern furniture crafted just for you.
        </p>
        <a href="/shop" className="btn-primary mt-4 inline-block">
          Shop Now
        </a>
      </div>
    </section>
  );
}
