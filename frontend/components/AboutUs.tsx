import Image from "next/image";

import ownersPic from "../public/assets/owners.webp";

const AboutUs: React.FC = (): JSX.Element => (
   <>
      <Image
         className="object-cover w-full h-full"
         src={ownersPic}
         alt=""
         width={800}
         height={800}
      />
      <div className="flex flex-col items-center justify-center bg-white p-10">
         <h1 className="mb-5 font-bold text-4xl md:text-5xl text-[#000A1F]">
            About Us
         </h1>
         <p className="text-lg text-left text-[#000A1F]">
            After over 25 years of daycare, Jennifer Berning purchased The Dirty
            Blonde Bar and Grill with her husband Tobey. The bar has been
            rebuilt from the ground up including a brand new bar, improved
            seating, and given a fun new atmosphere. Grand opening is on Apirl
            18th. Come and enjoy our signature Dirty Blonde Burger or a beer on
            tap.
         </p>
      </div>
   </>
);

export default AboutUs;
