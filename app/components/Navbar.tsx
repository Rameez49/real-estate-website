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
            <div className="text-center lg:text-left lg:flex ">
                <div>
              <div className="logo text-lg font-bold hidden lg:block">Logo</div>
              </div>
              <div className=" lg:flex  ">
              <div className="mb-1 ">Home</div>
              <div className="mb-1">Services</div>
              <div className="mb-1">Find a Team</div>
              <div className="mb-1">About Us</div>
              <div className="mb-1">Articles</div>
              <div className="mb-1">Portfolio</div>
              <div className="mb-1">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
