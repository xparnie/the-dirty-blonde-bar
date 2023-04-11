import AboutUs from "@/components/AboutUs";
import UpcomingEvents from "@/components/Events/UpcomingEvents";
import Hero from "@/components/Hero";
import Hours from "@/components/Hours";
import Layout from "@/components/Layout";
import MapsEmbed from "@/components/MapsEmbed";
import type { PostDataResponse } from "@/interfaces";
import { fetcher } from "@/lib/api";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
   const res = await fetcher(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${process.env.NEXT_PUBLIC_STRAPI_URL}events?populate=*&sort=date:ASC`
   );

   return {
      props: {
         events: res.data,
      },
   };
};

const Home: React.FC<PostDataResponse> = ({ events }): JSX.Element => (
   <Layout currentPage="Home">
      <Hero />
      <div className="grid sm:grid-cols-2 gap-0 w-screen sm:w-full">
         <div className="w-full flex flex-col items-center justify-center bg-gray-200 text-white">
            <AboutUs />
         </div>
         <div className="w-full flex flex-col items-center justify-center bg-bg p-10 text-left">
            <UpcomingEvents events={events} />
         </div>
         <div className="w-full flex flex-col items-center justify-center bg-bg p-10 order-last sm:order-none">
            <Hours />
         </div>
         <div className="w-full bg-white text-white relative">
            <MapsEmbed />
         </div>
      </div>
   </Layout>
);

export default Home;
