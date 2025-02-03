"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";

const RoomInspiration = () => {
  return (
    <div className="bg-[#fdf7f1] py-12">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-8 px-6 md:px-16">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 text-left">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              50+ Beautiful Rooms Inspiration
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you.
            </p>
          </div>
          <button className="bg-orange-500 text-white px-8 py-3 font-semibold text-sm md:text-base rounded-lg hover:bg-orange-600 transition duration-300">
            Explore More
          </button>
        </div>

        {/* Right Content */}
        <div className="hidden md:flex gap-8 w-full">
          {/* Main Image */}
          <div className="relative w-[404px] h-[582px] overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/image-9.png"
              alt="Inner Peace - Bedroom"
              className="w-full h-full object-cover"
              width={900}
              height={582}
            />
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-80 p-4 rounded-lg">
              <p className="text-sm text-gray-600">01 —— Bed Room</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Inner Peace
              </h3>
            </div>
            <div className="p-3 bg-orange-500 rounded-full absolute bottom-6 right-6 hover:bg-orange-600 transition duration-300">
              <Icon
                icon="solar:arrow-right-outline"
                className="text-white w-6 h-6"
              />
            </div>
          </div>

          {/* Smaller Images */}
          <div className="flex flex-col justify-between h-[582px] space-y-6">
            <div className="flex gap-6">
              <div className="w-[372px] h-[450px] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/image-10.png"
                  alt="Modern Vibes - Living Room"
                  className="object-cover"
                  width={372}
                  height={450}
                />
              </div>
              <div className="w-[180px] h-[450px] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/image-11.png"
                  alt="Modern Vibes - Dining Area"
                  className="object-cover"
                  width={180}
                  height={450}
                />
              </div>
            </div>
            {/* Pagination Dots */}
            <div className="flex gap-4 items-center">
              <span className="w-6 h-6 rounded-full border border-orange-500 flex justify-center items-center cursor-pointer">
                <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
              </span>
              <span className="bg-gray-400 w-3 h-3 rounded-full"></span>
              <span className="bg-gray-400 w-3 h-3 rounded-full"></span>
              <span className="bg-gray-400 w-3 h-3 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;
