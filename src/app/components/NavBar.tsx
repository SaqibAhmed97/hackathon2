"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Example cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Modern Sofa",
      price: 499.99,
      image: "/images/image-7.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Dining Chair",
      price: 89.99,
      image: "/images/image-10.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Wooden Flower",
      price: 89.99,
      image: "/images/image 101.png",
      quantity: 1,
    },
  ]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full py-7 px-5 md:px-14 bg-pink-500">
      <header className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/Meubel House_Logos-05.png"
            alt="Decent Furniture logo"
            width={50}
            height={50}
            className="w-16 h-16"
          />
          <h1 className="text-2xl md:text-3xl font-bold ml-2">
            
            <span className="text-[#197fd3]">D</span>
            <span className="text-white">ecent </span>
            <span className="text-[#197fd3]">F</span>
            <span className="text-white">urniture </span>
          </h1>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="flex flex-col justify-between w-8 h-6 cursor-pointer md:hidden"
        >
          <span
            className={`h-1 w-full bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          ></span>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ease-in-out md:relative md:bg-transparent md:w-auto md:h-auto ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-8 p-8 md:p-0 md:gap-12 text-xl font-medium">
            <li>
              <Link
                href="/"
                className="hover:underline text-white hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:underline text-white hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:underline text-white hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline text-white hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" aria-label="View account">
            <Icon
              icon="mdi:account-alert-outline"
              className="w-7 h-7 text-white hover:text-blue-600"
            />
          </Link>
          <Link href="#" aria-label="Search">
            <Icon
              icon="si:search-line"
              className="w-7 h-7 text-white hover:text-blue-600"
            />
          </Link>
          <Link href="#" aria-label="View wishlist">
            <Icon
              icon="solar:heart-linear"
              className="w-7 h-7 text-white hover:text-blue-600"
            />
          </Link>
          <button
            onClick={toggleCart}
            aria-label="Toggle cart sidebar"
            className="relative"
          >
            <Icon
              icon="streamline:shopping-cart-2"
              className="w-7 h-7 text-white hover:text-blue-600"
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-black hover:text-red-600"
          onClick={toggleCart}
          aria-label="Close cart"
        >
          ✕
        </button>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          {cartItems.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center py-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="ml-4 text-red-500 hover:text-red-700"
                    onClick={() => removeItem(item.id)}
                  >
                    <Icon icon="mdi:trash-can-outline" className="w-6 h-6" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No items in the cart.</p>
          )}
          {cartItems.length > 0 && (
            <div className="mt-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
