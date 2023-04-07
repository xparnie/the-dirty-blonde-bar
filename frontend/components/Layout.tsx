import Head from "next/head";
import React from "react";
import Footer from "./global/Footer";
import Navbar from "./global/Navbar";

const Layout: React.FC<{
   currentPage: string;
   children: React.ReactNode;
}> = ({ currentPage, children }) => {
   return (
      <>
         <div
            className={`w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-black overflow-hidden md:overflow-visible`}
            style={{ maxWidth: "1400px" }}
         >
            <Head>
               <title>The Dirty Blonde Bar and Grill</title>

               <meta name="title" content="The Dirty Blonde Bar and Grill" />
               <meta
                  name="description"
                  content="The Dirty Blonde Bar and Grill"
               />
            </Head>

            <main className="w-full flex-1 text-center">
               <Navbar currentPage={currentPage} />

               <div className="container h-full mx-auto max-w-7xl mt-[115px] mb-[25px] sm:mb-[50px]">
                  {children}
               </div>

               <Footer currentPage={currentPage} />
            </main>
         </div>
      </>
   );
};

export default Layout;
