import type { PageTitleProps } from "@/interfaces";
import React from "react";

const PageTitle: React.FC<PageTitleProps> = ({ title }): JSX.Element => (
   <>
      <div className="flex justify-center pt-10">
         <h1 className="text-5xl">{title}</h1>
      </div>
      <hr className="my-6 border-[#000a1f] sm:mx-auto lg:mb-10" />
   </>
);

export default PageTitle;
