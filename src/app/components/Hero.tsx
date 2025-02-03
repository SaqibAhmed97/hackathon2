export default function Hero() {
    return (
      <div
        className="flex md:justify-end justify-center items-center md:h-[716px] h-[400px] bg-no-repeat bg-center bg-cover bg-gray-100"
        style={{
          backgroundImage: `url("/images/hero-bg.png")`,
        }}
      >
        {/* Content Section */}
        <div className="bg-pink-200 flex flex-col gap-8 md:gap-12 h-full md:h-auto w-full md:w-auto md:mr-14 rounded-lg px-8 md:px-10 py-8 md:py-12">
          <div>
            <h3 className="text-[#4e0242] text-sm md:text-base font-semibold">
              New Arrival
            </h3>
            <h2 className="text-[#4e0242] text-2xl md:text-4xl font-bold leading-tight md:leading-snug mb-4">
              Discover Our <br />
              New Collection
            </h2>
            <p className="text-[#4e0242] text-xs md:text-base font-medium leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          {/* Button Section */}
          <div>
            <button className="bg-[#4e0242] text-white font-bold text-sm md:text-lg px-8 py-3 rounded-lg hover:bg-[#ff0582] transition duration-300">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    );
  }
  