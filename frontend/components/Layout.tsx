import React from "react";
import Footer from "./global/Footer";
import Navbar from "./global/Navbar";

interface LayoutProps {
   children: React.ReactNode;
   currentPage: string;
}

export const metadata = {
   title: "The Dirty Blonde Bar and Grill",
   description: "A bar and grill located in Boch, MN",
   keywords: "restaurant, bar, grill, dirty, blonde, bar and grill, boch",
};

const Layout: React.FC<LayoutProps> = ({
   currentPage,
   children,
}): JSX.Element => (
   <div
      className={`w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-black overflow-hidden md:overflow-visible`}
      style={{ maxWidth: "1536px" }}
   >
      <main className="w-full flex-1 text-center">
         <Navbar currentPage={currentPage} />

         <div className="container h-full mx-auto max-w-screen-2xl mt-[115px] mb-[25px] sm:mb-[50px]">
            {children}
         </div>

         <Footer />
      </main>
   </div>
);

export default Layout;
