import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="h-16 flex justify-between px-8 py-4 absolute w-full z-10">
        <div>
          <a className="flex h-full py-0 px-4 items-center cursor-pointer text-white">Home</a>
        </div>
        <div className="flex">
          <a className="flex h-full py-0 px-4 items-center cursor-pointer text-white" href="#">About</a>
          <a className="flex h-full py-0 px-4 items-center cursor-pointer text-white" href="#">Gallery</a>
          <a className="flex h-full py-0 px-4 items-center bg-black cursor-pointer text-white outline-none hover:outline-none hover:bg-white hover:text-black hover:rounded rounded hover:cursor-pointer" href="#">Contact</a>
        </div>
      </div>
    </>
  );
}
