"use client";

import { routes } from "@/data/global";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {
   currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }): JSX.Element => {
   const [nav, setNav] = useState(false);
   const handleNav = (): void => {
      setNav(!nav);
   };

   return (
      <nav className="fixed left-0 top-0 w-full ease-in duration-300 bg-bg z-50">
         <div className="max-w-screen-2xl m-auto flex justify-between items-center px-8 sm:px-2 py-6 h-[115px]">
            <Link
               href="/"
               className="list-none font-bold text-lg cursor-pointer"
            >
               <Image
                  className="mr-3 w-[175px] sm:w-[200px]"
                  src="/assets/logo_text_white.png"
                  alt="Dirty Blonde Bar Logo"
                  width="200"
                  height="200"
               />
            </Link>
            <ul className="hidden sm:flex">
               {routes.map(({ path, title }, index) => (
                  <li
                     key={index}
                     className={`list-none ${
                        currentPage === title
                           ? "opacity-100"
                           : "opacity-40 hover:opacity-100 transition-opacity"
                     }`}
                  >
                     <Link
                        className="py-4 px-6 text-xl text-white hover:text-slate-300"
                        href={path}
                     >
                        {title}
                     </Link>
                  </li>
               ))}
            </ul>

            <div onClick={handleNav} className="block sm:hidden z-10">
               {nav ? (
                  <AiOutlineClose size={25} className="text-white" />
               ) : (
                  <AiOutlineMenu size={25} className="text-white" />
               )}
            </div>
            <div
               className={
                  nav
                     ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-bg text-center ease-in duration-300"
                     : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-bg text-center ease-in duration-300"
               }
            >
               <ul>
                  <li>
                     <Link
                        href="/"
                        className="block mb-10 list-none cursor-pointer"
                     >
                        <Image
                           className="mr-3"
                           src="/assets/logo_text_white.png"
                           alt="Dirty Blonde Bar Logo"
                           width="250"
                           height="250"
                        />
                     </Link>
                  </li>
                  {routes.map(({ path, title }, index) => (
                     <li
                        key={index}
                        onClick={handleNav}
                        className="p-4 text-4xl text-white hover:text-grey-500"
                     >
                        <Link href={path}>{title}</Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
