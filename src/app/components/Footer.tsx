export default function Footer() {
    return (
      <footer className="bg-Button h-auto flex flex-col justify-center bg-white items-center w-full px-4 sm:px-8 md:px-16 lg:px-[100px] py-7 md:py-5">
        <div className="w-full max-w-[1240px] h-auto flex flex-col gap-[48px]">
          <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-[48px]">
            {/* Brand and Address Section */}
            <div className="flex flex-col gap-[20px] md:gap-[50px] w-full lg:w-[30%] md:text-left text-center">
              <h2 className="text-[24px] md:text-[34px] font-bold">
                <span className="text-[#197fd3]">D</span>
                <span className="text-pink-500">ecent</span>
                <span className="text-[#197fd3]">F</span>
                <span className="text-pink-500">urniture.</span>

              </h2>
              <div>
                <h2 className="text-[16px] font-normal text-[#9F9F9F]">
                  400 University Drive Suite 200 Coral <br /> Gables, <br />FL 33134 USA.
                </h2>
              </div>
            </div>
  
            {/* Links Section */}
            <div className="flex flex-col gap-[50px] w-full lg:w-[30%]">
              <h2 className="text-[16px] font-medium text-[#9F9F9F]">Links</h2>
              <ul className="text-[16px] font-medium text-black flex flex-col justify-between h-24 leading-4">
                <li className="hover:underline hover:text-blue-600 cursor-pointer">Home</li>
                <li className="hover:underline hover:text-blue-600 cursor-pointer">Shop</li>
                <li className="hover:underline hover:text-blue-600 cursor-pointer">About</li>
                <li className="hover:underline hover:text-blue-600 cursor-pointer">Contact</li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div className="flex flex-col gap-[50px] w-full lg:w-[30%]">
              <h2 className="text-[16px] font-medium text-[#9F9F9F]">Help</h2>
              <ul className="text-[16px] font-medium text-black flex flex-col justify-between h-24 leading-4">
                <li className="hover:underline hover:text-blue-600 cursor-pointer">Payment Options</li>
                <li className="hover:underline hover:text-blue-600 cursor-pointer">Returns</li>
                <li className="hover:underline hover:text-blue-600 cursor-pointer">Privacy Policies</li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div className="flex flex-col gap-[50px] w-full lg:w-[30%]">
              <h2 className="text-[16px] font-medium text-[#9F9F9F]">Newsletter</h2>
              <div className="flex gap-4 sm:gap-8 flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="text-[14px] font-normal text-[#9F9F9F] border-0 border-b border-black w-fit"
                />
                 <button
                aria-label="Subscribe to the newsletter"
                className="text-sm font-medium text-white bg-[#4e0242] px-4 py-2 rounded hover:bg-[#ff0582]"
              >
                SUBSCRIBE
              </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="pt-[16px] w-full border-t border-[#000000] text-center">
            <p className="text-black text-[16px]">
              2025 Decent Furniture. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  