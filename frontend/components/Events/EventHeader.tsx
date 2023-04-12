import type { EventHeaderProps } from "@/interfaces";
import Calendar from "../Calendar";

const EventHeader: React.FC<EventHeaderProps> = ({
   title,
   date,
   location,
}): JSX.Element => (
   <header className="flex items-center justify-start">
      <Calendar flip date={date} />
      <div>
         <h1 className="md:w-3/4 text-3xl font-semibold mb-2 text-black text-left">
            {title}
         </h1>
         {location != null && (
            <span className="block text-left">{location}</span>
         )}
      </div>
   </header>
);

export default EventHeader;
