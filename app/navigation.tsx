import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav className="bg-[#1C1C1C] pr-9 pl-9 pt-4 pb-4 rounded-xl flex font-roboto items-center mb-6">
      <Link href="/" className="w-1/3 text-left font-bold">
        Sarmad Ahmad
      </Link>
      <div className="flex justify-between w-1/3 font-light">
        <Link href="/about" className="w-1/3">
          About
        </Link>
        <Link href="/blogs" className="w-1/3">
          Blog
        </Link>
        <Link href="https://github.com/SarmadAD" className="w-1/3" target="_blank">
          GitHub
        </Link>
      </div>
      <Link href="https://github.com/SarmadAD" target="_blank" className="w-1/3 text-right">
        <span className="border-2 rounded-full h-10 w-10 inline-block"></span>
      </Link>
    </nav>
  );
}
