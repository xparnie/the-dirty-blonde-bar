import Head from "next/head";
import React from "react";
import Navbar from "./global/Navbar";

const Layout: React.FC<{
   currentPage: string;
   children: React.ReactNode;
}> = ({ currentPage, children }) => {
   return (
      <>
         <div
            className={`w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-black overflow-hidden md:overflow-visible`}
            style={{ maxWidth: "1200px" }}
         >
            <Head>
               <title>The Dirty Blonde Bar and Grill</title>

               <meta name="title" content="The Dirty Blonde Bar and Grill" />
               <meta
                  name="description"
                  content="The Dirty Blonde Bar and Grill"
               />
            </Head>

            <main className="p-5 w-full flex-1 text-center">
               <Navbar currentPage={currentPage} />

               <div className="container h-full mx-auto xl:px-30 max-w-6xl mt-[70px]">
                  {children}
               </div>
            </main>
         </div>
      </>
   );
};

export default Layout;
