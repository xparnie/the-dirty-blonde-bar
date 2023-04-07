import Layout from "@/components/Layout";

import { menuData } from "../data/menu";

export default function Menu() {
   return (
      <Layout currentPage="Menu">
         <div className="flex justify-center pt-10">
            <h1 className="text-5xl">Menu</h1>
         </div>
         <hr className="my-6 border-[#000a1f] sm:mx-auto lg:mb-10" />
         <div className="grid gap-3 lg:grid-cols-2 items-center sm:items-start">
            {menuData.map(({ title, subtitle, items }, index) => (
               <div key={`menu-${index}`} className="mb-10">
                  <h1 className="text-4xl mb-4 underline underline-offset-8">
                     {title}
                  </h1>
                  {subtitle && <h2 className="text-xl mb-4">{subtitle}</h2>}
                  <ul className="px-8 space-y-2">
                     {items.map(({ name, price, description }, index) => (
                        <li key={`item-${index}`}>
                           <div className="flex flex-row justify-between items-center text-2xl">
                              <span className="font-bold">{name}</span>
                              <span>${price}</span>
                           </div>
                           {description && (
                              <div className="mt-3 text-xl text-left italic">
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
   );
}
