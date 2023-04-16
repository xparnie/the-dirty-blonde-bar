import Image from "next/image";
import ownersPic from "../public/assets/momTobey.jpg";
import SectionTitle from "./SectionTitle";

const AboutUs: React.FC = (): JSX.Element => (
   <>
      <Image
         className="object-cover w-full h-full"
         src={ownersPic}
         alt=""
         loading="lazy"
         quality={10}
      />
      <div className="flex flex-col items-center justify-center bg-white p-10">
         <SectionTitle flip title="About Us" />
         <p className="text-lg text-left text-[#000A1F]">
            After 25 years of daycare, Jennifer Berning purchased The Dirty
            Blonde Bar and Grill with her husband Tobey. We pride ourselves on
            providing a good time and great food. Come and enjoy our brand new
            bar and seating, and stay for the music, drinks, pull tabs, and
            laughs! Our revamped menu offers our signature Dirty Blonde Burger
            and much more. We open April 18th and Bike Nights will rev up each
            Friday at 6:00 pm. Come on down and say hello!
         </p>
      </div>
   </>
);

export default AboutUs;
