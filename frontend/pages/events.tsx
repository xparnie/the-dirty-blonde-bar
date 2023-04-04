import Event from "@/components/Event";
import Layout from "@/components/Layout";
import { PostDataResponse } from "@/interfaces";
import { fetcher } from "@/lib/api";

export default function Events({ events }: PostDataResponse) {
   return (
      <Layout currentPage="Events">
         <div className="flex justify-center p-8">
            <h1 className="text-5xl">Events</h1>
         </div>
         <div className="grid gap-6 lg:grid-cols-3 items-center">
            {events &&
               events.map(({ id, attributes }) => (
                  <div key={id} className="w-full lg:max-w-sm">
                     <Event {...attributes} />
                  </div>
               ))}
         </div>
      </Layout>
   );
}

export async function getServerSideProps() {
   const eventsResponse = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/events`
   );

   return {
      props: {
         events: eventsResponse.data,
      },
   };
}
