import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => (
   <footer className="bg-white sm:mx-6">
      <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
         <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <Link
               href={"/"}
               className="list-none font-bold text-lg cursor-pointer mb-4 block"
            >
               <Image
                  className="mr-3"
                  src="/assets/logo_text_black.png"
                  alt="Dirty Blonde Bar Logo"
                  width="200"
                  height="200"
               />
            </Link>
            <ul className="flex flex-col items-center sm:items-end space-y-3 mb-6 text-md font-medium text-gray-500 sm:mb-0">
               <li>
                  <Link
                     className="flex items-center text-[#000A1F] hover:text-slate-800"
                     href="https://www.facebook.com/groups/3429096694012485"
                     target="_blank"
                  >
                     <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                     >
                        <path
                           fillRule="evenodd"
                           d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                           clipRule="evenodd"
                        />
                     </svg>
                     <span className="sr-only">Facebook page</span>
                     Facebook
                  </Link>
               </li>
               <li>
                  <a className="text-md text-[#000A1F]" href="tel:+3205563531">
                     Phone: 320-556-3531
                  </a>
               </li>
               <li>
                  <address>
                     <p className="text-md text-[#000A1F]">
                        The Dirty Blonde Bar & Grill 1683 Wall Ave Bock, MN
                     </p>
                  </address>
               </li>
            </ul>
         </div>
         <hr className="my-6 border-[#000a1f] sm:mx-auto lg:my-8" />
         <span className="block text-sm text-[#000a1f] sm:text-center">
            © 2023{" "}
            <Link href="/" className="hover:underline">
               The Dirty Blonde Bar and Grill
            </Link>
            . All Rights Reserved.
         </span>
      </div>
   </footer>
);

export default Footer;
