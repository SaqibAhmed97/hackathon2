"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsPatchCheck } from "react-icons/bs";
import { LiaHeadsetSolid } from "react-icons/lia";
import { FcShipped } from "react-icons/fc";
import Link from "next/link";

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: "1",
      title: "Top 10 Interior Design Trends for 2025",
      image: "/Rectangle 68.png",
      excerpt:
        "As we step into 2025, the world of interior design is embracing innovation, sustainability, and personal expression like never before. From bold color palettes to eco-friendly materials, this year's trends reflect a shift towards spaces that are as functional as they are stylish. Here's a sneak peek into the top 10 trends set to dominate the design landscape.",
    },
    {
      id: "2",
      title: "How to Choose the Perfect Furniture",
      image: "/Rectangle 68 (1).png",
      excerpt:
        "Choosing the right furniture is an essential step in creating a home that reflects your personality and meets your everyday needs. From balancing style and comfort to ensuring functionality and durability, the perfect furniture can transform any space into a harmonious and inviting haven. This guide will help you navigate the key considerations to make informed decisions that align with your taste, budget, and lifestyle.",
    },
    {
      id: "3",
      title: "The Ultimate Guide to Home Decor",
      image: "/Rectangle 68 (2).png",
      excerpt:
        "Home decor is more than just arranging furniture or adding decorative items—it's an art that reflects your personality, taste, and lifestyle. Whether you're looking to revamp a single room or your entire home, this guide will provide you with inspiration and practical tips to create a space you'll love.",
    },
  ];

  const categories = [
    { name: "Interior Design", count: 12 },
    { name: "Furniture", count: 8 },
    { name: "Home Decor", count: 15 },
    { name: "Sustainability", count: 5 },
    { name: "Lighting", count: 7 },
  ];

  const recentPosts = [
    { id: "1", title: "5 Tips for Organizing Your Workspace", image: "/Rectangle 69.png" },
    { id: "2", title: "Choosing the Right Lighting for Your Home", image: "/Rectangle 69 (1).png" },
    { id: "3", title: "How to Incorporate Plants in Your Decor", image: "/Rectangle 69 (2).png" },
    { id: "4", title: "Maximizing Small Spaces Effectively", image: "/Rectangle 69 (3).png" },
    { id: "5", title: "The Power of Color in Interior Design", image: "/Rectangle 69 (4).png" },
  ];

  // Filter blog posts based on the search term
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      {/* Header */}
      <header
        className="bg-cover bg-center py-20 text-center text-black"
        style={{
          backgroundImage: "url('Rectangle 1.png')",
        }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg">Blog</h1>
        <nav className="text-lg mt-3 drop-shadow-lg">
          <Link href="/" className="text-black font-bold">
            Home
          </Link>{" "}
          &gt; <span>Blog</span>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex gap-8 mt-10">
        {/* Blog Grid */}
        <section className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-lg bg-white"
            >
              <div className="relative w-full h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="rounded-t-lg object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
                <p className="text-gray-600 mt-3">{post.excerpt}</p>
                <button className="mt-4 px-4 py-2 bg-[#B88E2F] text-white rounded-md">
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="w-1/4 min-w-[250px]">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 text-lg border rounded-md"
            />
          </div>

          {/* Recent Posts */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="ml-4 text-gray-800">{post.title}</p>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="list-none">
              {categories.map((category, index) => (
                <li key={index} className="text-lg mb-2">
                  {category.name} <span className="text-gray-500">({category.count})</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#af95416e] py-12 mt-24 border-t">
        <div className="flex justify-around">
          <div className="flex items-center gap-4">
            <HiOutlineTrophy size="4rem" />
            <div>
              <h3 className="text-2xl font-bold">High Quality</h3>
              <p className="text-gray-600">Crafted from top materials</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <BsPatchCheck size="4rem" />
            <div>
              <h3 className="text-2xl font-bold">Warranty Protect</h3>
              <p className="text-gray-600">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FcShipped size="4rem" />
            <div>
              <h3 className="text-2xl font-bold">Free Shipping</h3>
              <p className="text-gray-600">Order over $150</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LiaHeadsetSolid size="4rem" />
            <div>
              <h3 className="text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
