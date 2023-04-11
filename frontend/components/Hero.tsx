import InternalBarPic from "@/public/assets/bwbar.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = (): JSX.Element => (
   <section className="relative flex flex-col items-center justify-center p-4 h-[calc(100vh_-_115px)] max-h-[845px] sm:min-h-[845px] sm:h-full">
      <Image
         className="absolute max-h-[845px] w-full h-full object-cover"
         src={InternalBarPic}
         alt="BW Bar"
         priority
      />
      <div className="backdrop-blur-sm bg-black/50 p-8 rounded-lg md:max-w-xl">
         <h1 className="mb-4 text-4xl md:text-5xl text-white font-bold uppercase tracking-tight">
            Rebuilt from the ground up!
         </h1>
         <p className="mb-8 text-white text-xl">
            The bar has been completely rebuilt and is under new ownership.
            Please stop by for a burger or beer!
         </p>

         <Link
            href={"/menu"}
            className="text-2xl inline-block bg-bg text-white p-4 px-6 rounded-lg"
         >
            Check Menu
         </Link>
      </div>
   </section>
);

export default Hero;
