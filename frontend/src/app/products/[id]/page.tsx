// "use client";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// interface Review {
//   rating: number;
//   comment: string;
//   date: string;
//   reviewerName: string;
//   reviewerEmail: string;
// }

// interface Dimensions {
//   width: number;
//   height: number;
//   depth: number;
// }

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   category: string;
//   brand: string;
//   sku: string;
//   weight: number;
//   dimensions: Dimensions;
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   images: string[];
//   thumbnail: string;
//   tags: string[];
//   meta: {
//     barcode: string;
//     qrCode: string;
//   };
//   reviews: Review[];
// }

// export default function ProductDetailsPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading product...</p>;
//   if (!product) return <p className="text-center mt-10">Product not found.</p>;

//   return (
//     <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Images */}
//         <div className="md:w-1/2 flex flex-col gap-4">
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             className="w-full h-96 object-cover rounded shadow"
//           />
//           {product.images && (
//             <div className="flex gap-2 overflow-x-auto">
//               {product.images.map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt={`${product.title}-${idx}`}
//                   className="w-20 h-20 object-cover rounded cursor-pointer hover:scale-105 transition"
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Product Info */}
//         <div className="md:w-1/2 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
//             <p className="text-gray-600 mb-4">{product.description}</p>

//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-xl font-bold text-green-700">
//                 ₹{product.price}{" "}
//                 {product.discountPercentage > 0 && (
//                   <span className="text-sm line-through text-gray-400 ml-2">
//                     ₹
//                     {(
//                       product.price *
//                       (1 + product.discountPercentage / 100)
//                     ).toFixed(2)}
//                   </span>
//                 )}
//               </span>
//               <span className="text-yellow-500 font-semibold">
//                 {product.rating} ⭐
//               </span>
//             </div>

//             <div className="mb-4 text-gray-700 space-y-1">
//               <p>
//                 <span className="font-medium">Category:</span>{" "}
//                 {product.category}
//               </p>
//               <p>
//                 <span className="font-medium">Brand:</span> {product.brand}
//               </p>
//               <p>
//                 <span className="font-medium">SKU:</span> {product.sku}
//               </p>
//               <p>
//                 <span className="font-medium">Weight:</span> {product.weight}g
//               </p>
//               <p>
//                 <span className="font-medium">Dimensions:</span>{" "}
//                 {product.dimensions.width} x {product.dimensions.height} x{" "}
//                 {product.dimensions.depth} cm
//               </p>
//               <p>
//                 <span className="font-medium">Warranty:</span>{" "}
//                 {product.warrantyInformation}
//               </p>
//               <p>
//                 <span className="font-medium">Shipping:</span>{" "}
//                 {product.shippingInformation}
//               </p>
//               <p>
//                 <span className="font-medium">Availability:</span>{" "}
//                 {product.availabilityStatus}
//               </p>
//               <p>
//                 <span className="font-medium">Return Policy:</span>{" "}
//                 {product.returnPolicy}
//               </p>
//               <p>
//                 <span className="font-medium">Minimum Order:</span>{" "}
//                 {product.minimumOrderQuantity}
//               </p>
//               <p>
//                 <span className="font-medium">Barcode:</span>{" "}
//                 {product.meta.barcode}
//               </p>
//               <p>
//                 <span className="font-medium">QR Code:</span>{" "}
//                 <img
//                   src={product.meta.qrCode}
//                   alt="QR Code"
//                   className="inline w-16 h-16"
//                 />
//               </p>
//               <p>
//                 <span className="font-medium">Tags:</span>{" "}
//                 {product.tags.join(", ")}
//               </p>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-6">
//             <button
//               className="flex-1 bg-green-600 text-white font-semibold py-3 rounded shadow hover:bg-green-700 transition"
//               onClick={() => alert("Added to cart!")}
//             >
//               Add to Cart
//             </button>
//             <button
//               className="flex-1 bg-amber-500 text-black font-semibold py-3 rounded shadow hover:bg-amber-600 transition"
//               onClick={() => router.push("/checkout")}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Reviews */}
//       {product.reviews && product.reviews.length > 0 && (
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
//           <div className="space-y-4">
//             {product.reviews.map((rev, idx) => (
//               <div key={idx} className="border p-4 rounded shadow-sm">
//                 <p className="font-semibold">{rev.reviewerName}</p>
//                 <p className="text-yellow-500">{rev.rating} ⭐</p>
//                 <p className="text-gray-600">{rev.comment}</p>
//                 <p className="text-gray-400 text-sm">
//                   {new Date(rev.date).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;
  tags: string[];
  meta: {
    barcode: string;
    qrCode: string;
  };
  reviews: Review[];
}

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch main product
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  // Fetch recommended products based on category
  useEffect(() => {
    if (product?.category) {
      fetch(
        `https://dummyjson.com/products/category/${product.category}?limit=4`
      )
        .then((res) => res.json())
        .then((data: { products: Product[] }) => {
          setRecommended(data.products.filter((p) => p.id !== product.id));
        });
    }
  }, [product]);

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Images */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <Zoom>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-cover rounded shadow"
            />
          </Zoom>
          {product.images && (
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.title}-${idx}`}
                  className="w-20 h-20 object-cover rounded cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-xl font-bold text-green-700">
                ₹{product.price}{" "}
                {product.discountPercentage > 0 && (
                  <span className="text-sm line-through text-gray-400 ml-2">
                    ₹
                    {(
                      product.price *
                      (1 + product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                )}
              </span>
              <span className="text-yellow-500 font-semibold">
                {product.rating} ⭐
              </span>
            </div>

            <div className="mb-4 text-gray-700 space-y-1">
              <p>
                <span className="font-medium">Category:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="font-medium">Brand:</span> {product.brand}
              </p>
              <p>
                <span className="font-medium">SKU:</span> {product.sku}
              </p>
              <p>
                <span className="font-medium">Weight:</span> {product.weight}g
              </p>
              <p>
                <span className="font-medium">Dimensions:</span>{" "}
                {product.dimensions.width} x {product.dimensions.height} x{" "}
                {product.dimensions.depth} cm
              </p>
              <p>
                <span className="font-medium">Warranty:</span>{" "}
                {product.warrantyInformation}
              </p>
              <p>
                <span className="font-medium">Shipping:</span>{" "}
                {product.shippingInformation}
              </p>
              <p>
                <span className="font-medium">Availability:</span>{" "}
                {product.availabilityStatus}
              </p>
              <p>
                <span className="font-medium">Return Policy:</span>{" "}
                {product.returnPolicy}
              </p>
              <p>
                <span className="font-medium">Minimum Order:</span>{" "}
                {product.minimumOrderQuantity}
              </p>
              <p>
                <span className="font-medium">Barcode:</span>{" "}
                {product.meta.barcode}
              </p>
              <p>
                <span className="font-medium">QR Code:</span>{" "}
                <img
                  src={product.meta.qrCode}
                  alt="QR Code"
                  className="inline w-16 h-16"
                />
              </p>
              <p>
                <span className="font-medium">Tags:</span>{" "}
                {product.tags.join(", ")}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              className="flex-1 bg-green-600 text-white font-semibold py-3 rounded shadow hover:bg-green-700 transition"
              onClick={() => alert("Added to cart!")}
            >
              Add to Cart
            </button>
            <button
              className="flex-1 bg-amber-500 text-black font-semibold py-3 rounded shadow hover:bg-amber-600 transition"
              onClick={() => router.push("/checkout")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {product.reviews.map((rev, idx) => (
              <div key={idx} className="border p-4 rounded shadow-sm">
                <p className="font-semibold">{rev.reviewerName}</p>
                <p className="text-yellow-500">{rev.rating} ⭐</p>
                <p className="text-gray-600">{rev.comment}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(rev.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommended Products */}
      {recommended.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {recommended.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col cursor-pointer"
                onClick={() => router.push(`/product/${item.id}`)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  ₹{item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
