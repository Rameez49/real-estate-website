"use client"
import React, { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <nav>
        <div className="">
          <div className="flex justify-between px-3 py-1 bg-black text-white md:hidden">
            <div>
              <div className="logo text-lg font-bold">Logo</div>
            </div>
            {toggle ?
            <div className="block md:hidden  pt-1" onClick={()=>setToggle(!toggle)}>
              <div className="line h-0.5 w-6 bg-white my-1"></div>
              <div className="line h-0.5 w-6 bg-white my-1"></div>
              <div className="line h-0.5 w-6 bg-white my-1"></div>
            </div>
           :
           <div className="text-5xl font-bold h-2" onClick={()=>setToggle(!toggle)}>
            *
           </div>

          }
          </div>
          <div>
            <div className="text-center md:text-left  md:flex md:justify-between md:bg-black md:text-white">
                <div>
              <div className="logo text-lg font-bold hidden md:block md:m-2 md:ml-4 lg:ml-10 xl:ml-10">Logo</div>
              </div>
              <div className="hidden md:flex md:pr-5 lg:pr-8 md:pt-2.5 xl:pr-12">
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20">Home</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20">Services</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20">Find a Team</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20">About Us</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20">Articles</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20">Portfolio</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20">Contact Us</div>
              </div>
             {!toggle ? <div className="  md:hidden lg:hidden bg-[#3f3f3f] text-white pt-3 pb-3">
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20 hover:bg-white hover:text-black">Home</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20 hover:bg-white hover:text-black">Services</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20 hover:bg-white hover:text-black">Find a Team</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20 hover:bg-white hover:text-black">About Us</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20 hover:bg-white hover:text-black">Articles</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20 hover:bg-white hover:text-black">Portfolio</div>
              <div className="mb-1 md:pl-6 lg:pl-11 xl:pl-20 hover:bg-white hover:text-black">Contact Us</div>
              </div>
: ""}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}