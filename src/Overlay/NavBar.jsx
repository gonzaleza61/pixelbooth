import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="h-16 flex justify-between px-8 py-4 absolute w-full z-10">
        <div>
          <a
            className="flex h-full py-0 px-4 items-center cursor-pointer text-white font-medium"
            style={{ fontFamily: "Tajawal, sans-serif"}}
          >
            Home
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="flex h-full py-0 px-4 items-center cursor-pointer text-white font-medium"
            href="#"
            style={{ fontFamily: "Tajawal, sans-serif"}}
          >
            About
          </a>
          <a
            className="flex h-full py-0 px-4 items-center cursor-pointer text-white font-medium"
            href="#"
            style={{ fontFamily: "Tajawal, sans-serif"}}
          >
            Gallery
          </a>
          <a
            className="flex h-full py-0 px-4 items-center bg-black cursor-pointer text-white font-medium outline-none hover:outline-none hover:bg-white hover:text-black hover:rounded rounded hover:cursor-pointer"
            href="#"
            style={{ fontFamily: "Tajawal, sans-serif"}}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
