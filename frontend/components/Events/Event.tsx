import { Event } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
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
            <Link
               type="button"
               className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-xl px-6 py-3.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
               href={url}
               target="_blank"
               rel="noopener noreferrer"
            >
               <svg
                  className="w-5 h-5 mr-3 -ml-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
               >
                  <path
                     fill="currentColor"
                     d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                  ></path>
               </svg>
               Facebook Group
            </Link>
         )}
      </div>
   </div>
);

export default Event;
