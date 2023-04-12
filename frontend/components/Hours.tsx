import { hours } from "@/data/global";

const Hours: React.FC = (): JSX.Element => (
   <div className="flex flex-col w-full lg:w-3/4">
      <div className="mb-5">
         <h2 className="text-4xl md:text-5xl text-white font-bold">Hours</h2>
         <span className="inline-block mt-1 text-md md:text-lg text-white font-bold">
            (Kitchen closes at 8 PM)
         </span>
      </div>
      <ul className="flex flex-col space-y-1 w-full text-white text-xl">
         {hours.map(({ day, time }) => (
            <li key={day} className="flex justify-between">
               <span>{day}</span>
               <span>{time}</span>
            </li>
         ))}
      </ul>
   </div>
);

export default Hours;
