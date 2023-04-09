import Event from "@/components/Events/Event";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import type { PostDataResponse } from "@/interfaces";
import { fetcher } from "@/lib/api";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
   const eventsResponse = await fetcher(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      `${process.env.NEXT_PUBLIC_STRAPI_URL!}/events?populate=*&sort=date:ASC`
   );

   return {
      props: {
         events: eventsResponse.data,
      },
   };
};

const Events: React.FC<PostDataResponse> = ({ events }): JSX.Element => (
   <Layout currentPage="Events">
      <PageTitle>Events</PageTitle>
      <div className="md:grid grid-cols-2 gap-6 items-start">
         {events.map(({ id, attributes }) => (
            <Event key={id} {...attributes} />
         ))}
      </div>
   </Layout>
);

export default Events;
