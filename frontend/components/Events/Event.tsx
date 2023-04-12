import type { EventProps } from "@/interfaces";
import EventBody from "./EventBody";
import EventFooter from "./EventFooter";
import EventHeader from "./EventHeader";

const Event: React.FC<EventProps> = ({
   title,
   date,
   description,
   media,
   url,
   location,
}): JSX.Element => (
   <article className="flex flex-col items-center justify-center">
      <div className="w-full p-5">
         <EventHeader {...{ title, date, location }} />
         <EventBody {...{ title, media, description }} />
         <EventFooter {...{ url }} />
      </div>
   </article>
);

export default Event;
