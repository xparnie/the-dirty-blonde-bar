import { Event } from "@/interfaces";

const Event = ({ title, description }: Event) => (
   <div className="shadow-md rounded-md bg-white">
      <div className="p-5">
         <h1 className="text-xl font-semibold mb-2 text-black font-roboto-condensed">
            {title}
         </h1>
         <p className="mb-4 text-black">{description}</p>
      </div>
   </div>
);

export default Event;
