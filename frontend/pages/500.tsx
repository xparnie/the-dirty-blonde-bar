import Logo from "@/public/assets/logo_text_white.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Custom500: React.FC = (): JSX.Element => (
   <div className="w-screen h-screen flex flex-col items-center justify-center bg-bg">
      <Link href="/" className="list-none font-bold text-lg cursor-pointer">
         <Image
            className="mb-16"
            src={Logo}
            alt="Dirty Blonde Bar Logo"
            width="250"
            height="250"
         />
      </Link>
      <div className="flex flex-col items-center justify-center">
         <h1 className="mb-4 text-3xl font-bold text-white">
            500 - Server Side Error
         </h1>
         <p className="text-lg text-white">Please try again later</p>
      </div>
   </div>
);

export default Custom500;
