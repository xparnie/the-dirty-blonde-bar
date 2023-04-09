import type { EventProps } from "@/interfaces";
import Calendar from "../Calendar";

const EventWidget: React.FC<EventProps> = ({ title, date }) => (
   <div className="flex items-center space-y-5">
      <Calendar date={date} />
      <h1 className="text-2xl font-semibold mb-2 text-white font-roboto-condensed">
         {title}
      </h1>
   </div>
);

export default EventWidget;
