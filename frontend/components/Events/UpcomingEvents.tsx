import EventWidget from "@/components/Events/EventWidget";
import { PostDataResponse } from "@/interfaces";
import Link from "next/link";

const UpcomingEvents: React.FC<PostDataResponse> = ({
   events,
}: PostDataResponse) => (
   <>
      {!events ? (
         <div className="mb-8">
            <h2 className="text-4xl md:text-5xl text-white font-bold">
               No Upcoming Events
            </h2>
         </div>
      ) : (
         <>
            <div className="mb-10">
               <h2 className="text-4xl md:text-5xl text-white font-bold">
                  Upcoming Events
               </h2>
            </div>
            <div className="flex flex-col space-y-7 mb-8">
               {events &&
                  events.slice(0, 3).map(({ id, attributes }) => (
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
