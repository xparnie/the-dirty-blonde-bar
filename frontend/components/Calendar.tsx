import { getDay, getDayText, getMonth } from "@/lib/util";

interface CalendarProps {
   date: string;
   flip?: boolean;
}

const Calendar: React.FC<CalendarProps> = ({
   date,
   flip,
}: CalendarProps): JSX.Element => {
   const flipBody =
      flip === true ? "border-[#000a1f] bg-bg" : "border-white bg-white/90";

   const flipHead =
      flip === true ? "border-[#ffffff] bg-bg" : "border-[#000a1f] bg-white/90";

   const flipText = flip === true ? "text-[#ffffff]" : "text-[#000a1f]";

   return (
      <div className="min-w-24 font-medium">
         <div
            className={`w-24 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg mr-5`}
         >
            <div className="block rounded-t overflow-hidden text-center ">
               <div
                  className={`${flipHead} backdrop-blur-sm text-white py-1 border-b-2`}
               >
                  <h1 className={`${flipText}`}>{getMonth(date)}</h1>
               </div>
               <div
                  className={`pt-1 border-l border-r ${flipBody} backdrop-blur-sm`}
               >
                  <span
                     className={`text-3xl font-bold leading-tight ${flipText}`}
                  >
                     {getDay(date)}
                  </span>
               </div>
               <div
                  className={`pb-2 border-l border-r border-b rounded-b-lg text-center ${flipBody} backdrop-blur-sm -pt-2 -mb-1`}
               >
                  <span className={`text-sm ${flipText}`}>
                     {getDayText(date)}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Calendar;
