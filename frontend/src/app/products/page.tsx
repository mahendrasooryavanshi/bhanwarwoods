"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline"; // heroicons
// changes
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters & sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minRating, setMinRating] = useState(0);
  const [sortOption, setSortOption] = useState("default");

  // Mobile filter toggle
  const [showFilters, setShowFilters] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data: { products: Product[] }) => {
        setProducts(data.products);
        setFiltered(data.products);

        const uniqueCategories: string[] = [
          "all",
          ...Array.from(new Set(data.products.map((p) => p.category))),
        ];
        setCategories(uniqueCategories);

        setLoading(false);
      });
  }, []);

  // Apply filters & sorting
  useEffect(() => {
    let temp = [...products];

    if (searchTerm)
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    if (selectedCategory !== "all")
      temp = temp.filter((p) => p.category === selectedCategory);

    temp = temp.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    temp = temp.filter((p) => p.rating >= minRating);

    if (sortOption === "price-asc") temp.sort((a, b) => a.price - b.price);
    else if (sortOption === "price-desc")
      temp.sort((a, b) => b.price - a.price);
    else if (sortOption === "rating") temp.sort((a, b) => b.rating - a.rating);

    setFiltered(temp);
  }, [
    searchTerm,
    selectedCategory,
    priceRange,
    minRating,
    sortOption,
    products,
  ]);

  // Filters UI
  const FiltersUI = (
    <div className="flex flex-wrap gap-2 mt-[25px]">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products"
        className="px-4 py-2 rounded border flex-1 min-w-[150px] dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category */}
      <select
        className="px-4 py-2 rounded border min-w-[120px] dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Sort */}
      <select
        className="px-4 py-2 rounded border min-w-[150px] dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Sort by Default</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="rating">Rating: High → Low</option>
      </select>

      {/* Price Range */}
      <div className="flex items-center gap-1">
        <input
          type="number"
          min="0"
          placeholder="Min"
          className="px-2 py-1 w-20 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
        />
        <span className="text-gray-500 dark:text-gray-300">-</span>
        <input
          type="number"
          min="0"
          placeholder="Max"
          className="px-2 py-1 w-20 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>

      {/* Rating */}
      <select
        className="px-4 py-2 rounded border min-w-[120px] dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
      >
        <option value={0}>All Ratings</option>
        <option value={3}>3 ⭐ & up</option>
        <option value={4}>4 ⭐ & up</option>
        <option value={4.5}>4.5 ⭐ & up</option>
      </select>
    </div>
  );

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-1200 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Mobile Filter Toggle */}
        <div className="flex justify-between items-center mb-6 mt-5 sm:hidden">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Products
          </h2>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FunnelIcon className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters - Desktop */}
        <div className="hidden sm:block">{FiltersUI}</div>

        {/* Filters - Mobile Overlay */}
        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white dark:bg-gray-900 w-3/4 max-w-sm p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Filters
                </h3>
                <button onClick={() => setShowFilters(false)}>
                  <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              {FiltersUI}
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
                onClick={() => setShowFilters(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {loading ? (
          <p className="text-gray-600 dark:text-gray-300">
            Loading products...
          </p>
        ) : filtered.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                // href={`https://dummyjson.com/products/${product.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <img
                  src={product?.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {product.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-2">
                  {product.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-gray-800 dark:text-gray-100 font-bold">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-yellow-500">
                    {product.rating} ⭐
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
