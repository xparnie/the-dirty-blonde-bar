import { Event } from "@/interfaces";
import Image from "next/image";
import Calendar from "../Calendar";

const Event: React.FC<Event> = ({ title, date, description, media }: Event) => (
   <div className="flex flex-col items-center justify-center">
      <div className="w-full p-5">
         <div className="flex items-center justify-start">
            <Calendar flip date={date} />
            <h1 className="text-3xl font-semibold mb-2 text-black">{title}</h1>
         </div>
         <div className="mb-6">
            {media?.data?.attributes?.url && (
               <Image
                  className="m-auto"
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL?.slice(
                     0,
                     -3
                  )}${media?.data?.attributes?.url.substring(1)}`}
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
      </div>
   </div>
);

export default Event;
