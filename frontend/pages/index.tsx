import AboutUs from "@/components/AboutUs";
import UpcomingEvents from "@/components/Events/UpcomingEvents";
import Hero from "@/components/Hero";
import Hours from "@/components/Hours";
import MapsEmbed from "@/components/MapsEmbed";
import Layout from "@/components/global/Layout";
import type { PostDataResponse } from "@/interfaces";
import { fetcher } from "@/lib/api";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
   const res = await fetcher(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${process.env.NEXT_PUBLIC_UPLOAD_URL}events?populate=*&sort=date:ASC`
   );

   return {
      props: {
         events: res.data,
      },
   };
};

const pageTitle = "Home";

const Home: React.FC<PostDataResponse> = ({ events }): JSX.Element => (
   <Layout currentPage={pageTitle}>
      <Hero />
      <div className="grid sm:grid-cols-2 gap-0 w-screen sm:w-full">
         <section className="w-full flex flex-col items-center justify-center bg-gray-200 text-white">
            <AboutUs />
         </section>
         <section className="w-full flex flex-col items-center justify-center bg-bg p-10 text-left">
            <UpcomingEvents events={events} />
         </section>
         <section className="w-full flex flex-col items-center justify-center bg-bg p-10 order-last sm:order-none">
            <Hours />
         </section>
         <section className="w-full bg-white text-white relative">
            <MapsEmbed />
         </section>
      </div>
   </Layout>
);

export default Home;
