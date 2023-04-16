import EventWidget from "@/components/Events/EventWidget";
import type { PostDataResponse } from "@/interfaces";
import Link from "next/link";
import SectionTitle from "../SectionTitle";

const UpcomingEvents: React.FC<PostDataResponse> = ({
   events,
}): JSX.Element => (
   <>
      {events === null ? (
         <SectionTitle title="No Upcoming Events" />
      ) : (
         <>
            <SectionTitle title="Upcoming Events" />
            <div className="flex flex-col space-y-7 mb-8">
               {events?.slice(0, 3).map(({ id, attributes }) => (
                  <Link
                     href={"/events"}
                     key={id}
                     className="w-full lg:max-w-sm"
                  >
                     <EventWidget {...attributes} />
                  </Link>
               ))}
            </div>
            <div>
               <Link
                  href={"/events"}
                  className="inline-block bg-white hover:bg-white/90 text-[#000A1F] p-3 rounded-lg"
               >
                  More Events
               </Link>
            </div>
         </>
      )}
   </>
);

export default UpcomingEvents;
