import AboutUs from "@/components/AboutUs";
import UpcomingEvents from "@/components/Events/UpcomingEvents";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import type { PostDataResponse } from "@/interfaces";
import { fetcher } from "@/lib/api";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
   const eventsResponse = await fetcher(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/events?populate=*&sort=date:ASC`
   );

   return {
      props: {
         events: eventsResponse.data,
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
            <div className="flex flex-col w-full lg:w-3/4">
               <div className="mb-5">
                  <h2 className="text-4xl md:text-5xl text-white font-bold">
                     Hours
                  </h2>
               </div>
               <ul className="flex flex-col space-y-1 w-full text-white text-xl">
                  <li className="flex justify-between">
                     <span>Sunday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Monday</span>
                     <span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Tuesday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Wednesday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Thursday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Friday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Saturday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
               </ul>
            </div>
         </div>
         <div className="w-full bg-white text-white relative">
            <iframe
               className="m-0 w-full z-0"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.257737057891!2d-93.55499448333984!3d45.786063979106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b395cf64be94b1%3A0x164d4a1cf7cfc01a!2sKountry%20Kettle!5e0!3m2!1sen!2sus!4v1680794122764!5m2!1sen!2sus"
               width="400"
               height="400"
               allowFullScreen={false}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            />
         </div>
      </div>
   </Layout>
);

export default Home;
