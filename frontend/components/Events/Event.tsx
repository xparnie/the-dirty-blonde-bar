import { Event } from "@/interfaces";
import Image from "next/image";
import Calendar from "../Calendar";

const Event: React.FC<Event> = ({
   title,
   date,
   description,
   media,
   url,
   location,
}: Event) => (
   <div className="flex flex-col items-center justify-center">
      <div className="w-full p-5">
         <div className="flex items-center justify-start">
            <Calendar flip date={date} />
            <div>
               <h1 className="md:w-3/4 text-3xl font-semibold mb-2 text-black text-left">
                  {title}
               </h1>
               {location && <span className="block text-left">{location}</span>}
            </div>
         </div>
         <div className="mb-6">
            {media?.data?.attributes?.url && (
               <Image
                  className="m-auto"
                  src={`${
                     process.env.NEXT_PUBLIC_STRAPI_UPLOAD_URL
                  }${media?.data?.attributes?.url.substring(1)}`}
                  alt={title}
                  width="300"
                  height="300"
               />
            )}
         </div>
         <div className="max-w-screen-md text-left">
            {description && (
               <p className="mb-4 text-black text-xl">{description}</p>
            )}
         </div>
         {url && (
            <a
               className="inline-block mt-5 px-6 py-4 font-semibold text-lg bg-bg text-white rounded-full shadow-sm"
               href={location}
            >
               Facebook Group
            </a>
         )}
      </div>
   </div>
);

export default Event;
