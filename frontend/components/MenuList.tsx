import { menuData } from "@/data/menu";

const MenuList: React.FC = (): JSX.Element => (
   <>
      {menuData.map(({ title, subtitle, items }, index) => (
         <section key={`menuSection-${index}`} className="mb-10">
            <h1 className="text-4xl mb-4 underline underline-offset-8">
               {title}
            </h1>
            {subtitle != null && <h2 className="text-2xl mb-4">{subtitle}</h2>}
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
         </section>
      ))}
   </>
);

export default MenuList;
