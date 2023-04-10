import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import React from "react";
import { menuData } from "../data/menu";

const Menu: React.FC = (): JSX.Element => (
   <>
      <Head>
         <title>Menu - The Dirty Blonde Bar and Grill</title>
      </Head>
      <Layout currentPage="Menu">
         <PageTitle title="Menu" />
         <div className="grid gap-3 lg:grid-cols-2 items-center sm:items-start">
            {menuData.map(({ title, subtitle, items }, index) => (
               <div key={`menu-${index}`} className="mb-10">
                  <h1 className="text-4xl mb-4 underline underline-offset-8">
                     {title}
                  </h1>
                  {subtitle != null && (
                     <h2 className="text-2xl mb-4">{subtitle}</h2>
                  )}
                  <ul className="px-8 space-y-2">
                     {items.map(({ name, price, description }, index) => (
                        <li key={`item-${index}`}>
                           <div className="flex flex-row justify-between items-center text-2xl">
                              <span className="font-bold">{name}</span>
                              <span>${price}</span>
                           </div>
                           {description != null && (
                              <div className="mt-1 text-xl text-left italic">
                                 <span>{description}</span>
                              </div>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </Layout>
   </>
);

export default Menu;
