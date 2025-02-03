"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsPatchCheck } from "react-icons/bs";
import { LiaHeadsetSolid } from "react-icons/lia";
import { FcShipped } from "react-icons/fc";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { TbClockHour3Filled } from "react-icons/tb";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you can handle sending the form data, e.g., with an API call.
    console.log(formData);
  };

  return (
    <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <header
        style={{
          backgroundImage: "url('/Rectangle 1.png')", // Assuming this is in the public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "316px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 0",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h1
          style={{
            color: "black",
            fontSize: "5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            marginBottom: "10px",
          }}
        >
          Contact Us
        </h1>
        <nav
          style={{
            fontSize: "1rem",
            color: "black",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Link href="/" style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}>
            Home
          </Link>{" "}
          &gt; <span>Contact</span>
        </nav>
      </header>

      <div style={{ textAlign: "center", flex: 1, padding: "80px" }}>
        <h4 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "15px" }}>
          Get In Touch With Us
        </h4>
        <p style={{ textAlign: "center", fontSize: "1rem", color: "#555" }}>
          For More Information About Our Product & Services. Please Feel Free To Drop Us
        </p>
        <p style={{ textAlign: "center", fontSize: "1rem", color: "#555" }}>
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px auto",
          maxWidth: "1200px",
        }}
      >
        {/* Left Side: Address, Phone, Working Hours */}
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ marginRight: "10px" }}>
              <FaMapMarkerAlt size="2rem" />
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Address:</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ marginRight: "10px" }}>
              <FaPhoneAlt size="2rem" />
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Phone:</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ marginRight: "10px" }}>
              <TbClockHour3Filled size="2rem" />
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Working Hours:</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          {isSubmitted ? (
            <div style={{ textAlign: "center", color: "#28a745" }}>
              <h3>Thank you for reaching out! Well get back to you shortly.</h3>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
              />
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
              />
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
              ></textarea>
              <button
                type="submit"
                style={{
                  padding: "12px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
        
      </section>

      {/* Footer Section */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "40px 0px", // Reduced padding to make the footer shorter
          marginTop: "160px", // Adjusted margin to control the position
          textAlign: "center",
          borderTop: "1px solid #ddd", // Optional to visually separate from the products
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <HiOutlineTrophy size="4rem" />
          <div>
            <h3 className="font-bold text-3xl" style={{ marginBottom: "0px" }}>
              High Quality
            </h3>
            <p className="text-stone-500">Crafted from top materials</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <BsPatchCheck size="4rem" />
          <div>
            <h3 className="font-bold text-3xl" style={{ marginBottom: "0px" }}>
              Warranty Protect
            </h3>
            <p className="text-stone-500">Over 2 years</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FcShipped size="4rem" />
          <div>
            <h3 className="font-bold text-3xl" style={{ marginBottom: "0px" }}>
              Free Shipping
            </h3>
            <p className="text-stone-500">Order over $150</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LiaHeadsetSolid size="4rem" />
          <div>
            <h3 className="font-bold text-3xl" style={{ marginBottom: "0px" }}>
              24/7 Support
            </h3>
            <p className="text-stone-500">Dedicated support</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
