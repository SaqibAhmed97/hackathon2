import Image from "next/image";

export default function FuniroFurniture() {
  return (
    <div className="w-full pt-8 md:pt-16 pb-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center relative w-full">
        <h3 className="text-sm md:text-lg font-semibold text-gray-500">
          Share your setup with
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          #FuniroFurniture
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full mt-8">
        <Image
          src="/images/setup-Images.png"
          alt="Funiro Furniture Setup"
          layout="responsive"
          width={2000}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
