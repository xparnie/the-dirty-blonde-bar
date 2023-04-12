import type { EventBodyProps } from "@/interfaces";
import Image from "next/image";

const EventBody: React.FC<EventBodyProps> = ({
   media,
   title,
   description,
}): JSX.Element => (
   <section>
      <div className="mb-6">
         {media?.data?.attributes?.url != null && (
            <Image
               className="m-auto"
               src={media?.data?.attributes.url}
               alt={`${title} - Logo`}
               width="300"
               height="300"
            />
         )}
      </div>
      {description.length > 0 && (
         <div className="max-w-screen-md text-left">
            <p className="mb-4 text-black text-xl">{description}</p>
         </div>
      )}
   </section>
);

export default EventBody;
