import Event from "@/components/Events/Event";
import Layout from "@/components/Layout";
import { PostDataResponse } from "@/interfaces";
import { fetcher } from "@/lib/api";

export default function Events({ events }: PostDataResponse) {
   return (
      <Layout currentPage="Events">
         <div className="flex justify-center pt-10">
            <h1 className="text-5xl">Events</h1>
         </div>
         <hr className="my-6 border-[#000a1f] sm:mx-auto lg:mb-10" />
         <div className="md:grid grid-cols-2 gap-6 items-start">
            {events &&
               events.map(({ id, attributes }) => (
                  <Event key={id} {...attributes} />
               ))}
         </div>
      </Layout>
   );
}

export async function getServerSideProps() {
   const eventsResponse = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/events?populate=*`
   );

   return {
      props: {
         events: eventsResponse.data,
      },
   };
}
