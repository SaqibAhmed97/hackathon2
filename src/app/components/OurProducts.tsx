"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const products = [
  {
    id: 1,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    discount: "-30%",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/images/image-1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "",
    image: "/images/image-2.png",
  },
  {
    id: 3,
    name: "Lolito",
    fullname: "Luxury big sofa",
    discount: "-50%",
    price: "RS 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-3.png",
  },
  {
    id: 4,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "RS 500.000",
    
    originalPrice: "",
    image: "/images/image-4.png",
  },
  {
    id: 5,
    name: "Grifo",
    fullname: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: "",
    image: "/images/image-5.png",
  },
  {
    id: 6,
    name: "Muggo",
    fullname: "Small mug",
    price: "Rp 150.000",
    originalPrice: "",
    image: "/images/image-6.png",
  },
  {
    id: 7,
    name: "Pingky",
    fullname: "Cute bed set",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-7.png",
  },
  {
    id: 8,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
  {
    id: 9,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
  {
    id: 10,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
  {
    id: 11,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
  {
    id: 12,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
  {
    id: 13,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
];

export default function OurProducts() {
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({});
  const [cart, setCart] = useState<Record<number, boolean>>({});
  const [visibleProducts, setVisibleProducts] = useState(8); // Limit visible products initially

  const toggleLike = (id: number) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleCart = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 4); // Show 4 more products each time
  };

  return (
    <div className="w-full py-16 bg-[#F4F5F7] px-4 border-b-2">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black">Our Products</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, visibleProducts).map((product) => (
            <div
              className="bg-white group relative rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              key={product.id}
            >
              {/* Product Image */}
              <div
                className="relative w-full h-64 bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                {/* Discount or "NEW" Badge */}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-medium px-2 py-2 rounded-md">
                    {product.discount}
                  </div>
                )}
                {[3, 5, 7].includes(product.id) && !product.discount && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-medium px-2 py-2 rounded-md">
                    NEW
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black">{product.name}</h2>
                <p className="text-sm text-black mb-2">{product.fullname}</p>
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-lg font-bold text-black">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-12">
                  <button
                    aria-label={likedProducts[product.id] ? "Unlike product" : "Like product"}
                    onClick={() => toggleLike(product.id)}
                    className="flex items-center gap-1 text-sm font-semibold text-gray-800"
                  >
                    <Icon
                      icon={likedProducts[product.id] ? "mingcute:heart-fill" : "mingcute:heart-line"}
                      className={likedProducts[product.id] ? "text-red-500" : ""}
                    />
                    {likedProducts[product.id] ? "Liked" : "Like"}
                  </button>
                  <button
                    aria-label={cart[product.id] ? "Remove from cart" : "Add to cart"}
                    onClick={() => toggleCart(product.id)}
                    className="flex-1 border-2 border-white text-sm font-semibold text-white bg-blue-600 px-2 py-2"
                  >
                    {cart[product.id] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleProducts < products.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className="bg-white text-black px-16 py-3 border-2 border-black text-sm font-bold hover:bg-red-300 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
