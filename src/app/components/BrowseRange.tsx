import Image from "next/image";

export default function BrowseRange() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-8 md:pt-16 items-center bg-gray-100 px-4">
      {/* Header Section */}
      <div className="text-center max-w-2xl">
        <h2 className="text-primary font-bold text-2xl md:text-4xl">
          Browse The Range
        </h2>
        <p className="text-secondary font-normal text-lg md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-5">
        {/* Dining Section */}
        <div className="w-full sm:w-[45%] lg:w-[30%] flex flex-col gap-8">
          <Image
            src="/images/image 100.png"
            alt="Dining furniture"
            className="rounded-md"
            layout="responsive"
            width={381}
            height={214}
          />
          <p className="font-semibold text-xl text-primary text-center">Dining</p>
        </div>

        {/* Living Section */}
        <div className="w-full sm:w-[45%] lg:w-[30%] flex flex-col gap-8">
          <Image
            src="/images/image 106.png"
            alt="Living room furniture"
            className="rounded-md"
            layout="responsive"
            width={381}
            height={214}
          />
          <p className="font-semibold text-xl text-primary text-center">Living</p>
        </div>

        {/* Bedroom Section */}
        <div className="w-full sm:w-[45%] lg:w-[30%] flex flex-col gap-8">
          <Image
            src="/images/image 101.png"
            alt="Bedroom furniture"
            className="rounded-md"
            layout="responsive"
            width={381}
            height={214}
          />
          <p className="font-semibold text-xl text-primary text-center">Bedroom</p>
        </div>
      </div>
    </div>
  );
}
