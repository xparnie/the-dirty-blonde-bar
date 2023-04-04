import { routes } from "@/data/global";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar({ currentPage }: NavbarProps) {
   const [nav, setNav] = useState(false);

   const handleNav = () => setNav(!nav);

   return (
      <nav className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-bg">
         <div className="max-w-[1240px] m-auto flex justify-between items-center px-8 py-4">
            <Link
               href="/"
               className="list-none font-bold text-lg cursor-pointer"
            >
               <Image
                  className="mr-3"
                  src="/assets/logo_text_white.png"
                  alt="Dirty Blonde Bar Logo"
                  width="175"
                  height="175"
               />
            </Link>
            <ul className="hidden sm:flex">
               {routes.map(({ path, title }, index) => (
                  <li
                     key={index}
                     className={`list-none p-4 ${
                        currentPage === title
                           ? "opacity-100"
                           : "opacity-40 hover:opacity-100 transition-opacity"
                     }`}
                  >
                     <Link
                        className="text-white hover:text-slate-300"
                        href={path}
                     >
                        {title}
                     </Link>
                  </li>
               ))}
            </ul>

            <div onClick={handleNav} className="block sm:hidden z-10">
               {nav ? (
                  <AiOutlineClose size={20} className="text-white" />
               ) : (
                  <AiOutlineMenu size={20} className="text-white" />
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
}

// function Navbar({ currentPage }: NavbarProps) {
//    return (
//       <nav className="flex items-center justify-between">
//          <Link href="/" className="list-none font-bold text-lg cursor-pointer">
//             <Image
//                className="mr-3"
//                src="/assets/logo_text_white.png"
//                alt="Dirty Blonde Bar Logo"
//                width="250"
//                height="250"
//             />
//          </Link>
//          <ul className="flex items-center space-x-10">
//             {routes.map((item, index) => (
//                <li
//                   key={index}
//                   className={`list-none text-white ${
//                      currentPage === item.title
//                         ? "opacity-100"
//                         : "opacity-40 hover:opacity-100 transition-opacity"
//                   }`}
//                >
//                   <Link href={item.path}>{item.title}</Link>
//                </li>
//             ))}
//          </ul>
//       </nav>
//    );
// }

export default Navbar;

type NavbarProps = {
   currentPage: String;
};
