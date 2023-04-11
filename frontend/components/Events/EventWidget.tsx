import type { EventProps } from "@/interfaces";
import Calendar from "../Calendar";

const EventWidget: React.FC<EventProps> = ({ title, date }): JSX.Element => (
   <div className="flex items-center">
      <Calendar date={date} />
      <h2 className="text-2xl font-semibold text-white font-roboto-condensed">
         {title}
      </h2>
   </div>
);

export default EventWidget;
