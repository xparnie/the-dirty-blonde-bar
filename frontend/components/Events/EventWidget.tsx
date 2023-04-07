import { Event } from "@/interfaces";
import Calendar from "../Calendar";

const EventWidget: React.FC<Event> = ({ title, date }: Event) => {
   return (
      <div className="flex items-center space-y-5">
         <Calendar date={date} />
         <h1 className="text-xl font-semibold mb-2 text-white font-roboto-condensed">
            {title}
         </h1>
      </div>
   );
};

export default EventWidget;
