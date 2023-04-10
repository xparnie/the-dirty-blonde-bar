import Event from "@/components/Events/Event";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import type { PostDataResponse } from "@/interfaces";
import type { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
   const res = await fetch(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `https://whale-app-4tcse.ondigitalocean.app/api/events?populate=*&sort=date:ASC`
   );
   const eventsResponse = await res.json();

   return {
      props: {
         events: eventsResponse.data,
      },
   };
};

const Events: React.FC<PostDataResponse> = ({ events }): JSX.Element => (
   <>
      <Head>
         <title>Events - The Dirty Blonde Bar and Grill</title>
      </Head>
      <Layout currentPage="Events">
         <PageTitle title="Events" />
         <div className="md:grid grid-cols-2 gap-6 items-start">
            {events.map(({ id, attributes }) => (
               <Event key={id} {...attributes} />
            ))}
         </div>
      </Layout>
   </>
);

export default Events;
