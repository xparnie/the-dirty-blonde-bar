import React from "react";

interface PageTitleProps {
   children: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => (
   <>
      <div className="flex justify-center pt-10">
         <h1 className="text-5xl">{children}</h1>
      </div>
      <hr className="my-6 border-[#000a1f] sm:mx-auto lg:mb-10" />
   </>
);

export default PageTitle;
