import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="">
          <div className="flex justify-between px-3 py-1 bg-black text-white lg:hidden">
            <div>
              <div className="logo text-lg font-bold">Logo</div>
            </div>
            <div className="lg:hidden">
              <div className="line h-0.5 w-6 bg-white my-1"></div>
              <div className="line h-0.5 w-6 bg-white my-1"></div>
              <div className="line h-0.5 w-6 bg-white my-1"></div>
            </div>
          </div>
          <div>
            <div className="text-center lg:text-left  lg:flex lg:justify-between lg:bg-black lg:text-white">
                <div>
              <div className="logo text-lg font-bold hidden lg:block lg:m-2 lg:ml-10 xl:ml-10">Logo</div>
              </div>
              <div className=" lg:flex  lg:pr-8 lg:pt-2 xl:pr-12">
              <div className="mb-1 lg:pl-11 xl:pl-20">Home</div>
              <div className="mb-1 lg:pl-11 xl:pl-20">Services</div>
              <div className="mb-1 lg:pl-11 xl:pl-20">Find a Team</div>
              <div className="mb-1 lg:pl-11 xl:pl-20">About Us</div>
              <div className="mb-1 lg:pl-11 xl:pl-20">Articles</div>
              <div className="mb-1 lg:pl-11 xl:pl-20">Portfolio</div>
              <div className="mb-1 lg:pl-11 xl:pl-20">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
