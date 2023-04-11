import React from "react";

const Hours: React.FC = (): JSX.Element => (
   <>
      <div className="flex flex-col w-full lg:w-3/4">
         <div className="mb-5">
            <h2 className="text-4xl md:text-5xl text-white font-bold">Hours</h2>
            <span className="inline-block mt-1 text-md md:text-lg text-white font-bold">
               (Kitchen closes at 8 PM)
            </span>
         </div>
         <ul className="flex flex-col space-y-1 w-full text-white text-xl">
            <li className="flex justify-between">
               <span>Monday</span>
               <span>Closed</span>
            </li>
            <li className="flex justify-between">
               <span>Tuesday</span>
               <span>11 AM - 1 AM</span>
            </li>
            <li className="flex justify-between">
               <span>Wednesday</span>
               <span>11 AM - 1 AM</span>
            </li>
            <li className="flex justify-between">
               <span>Thursday</span>
               <span>11 AM - 1 AM</span>
            </li>
            <li className="flex justify-between">
               <span>Friday</span>
               <span>11 AM - 1 AM</span>
            </li>
            <li className="flex justify-between">
               <span>Saturday</span>
               <span>8 AM - 1 AM</span>
            </li>
            <li className="flex justify-between">
               <span>Sunday</span>
               <span>8 AM - 11 PM</span>
            </li>
         </ul>
      </div>
   </>
);

export default Hours;
