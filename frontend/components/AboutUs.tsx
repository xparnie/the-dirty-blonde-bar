import Image from "next/image";
import ownersPic from "../public/assets/owners.webp";
import SectionTitle from "./SectionTitle";

const AboutUs: React.FC = (): JSX.Element => (
   <>
      <Image
         className="object-cover w-full h-full"
         src={ownersPic}
         alt=""
         loading="lazy"
         quality={40}
      />
      <div className="flex flex-col items-center justify-center bg-white p-10">
         <SectionTitle flip title="About Us" />
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
