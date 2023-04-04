import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
   return (
      <Layout currentPage="Home">
         <div className="flex justify-center p-8">
            <h1 className="text-5xl">Home</h1>
         </div>
         <div className="flex">
            <Image
               src="/assets/stock.jpeg"
               alt="stock"
               width={1440}
               height={800}
            />
         </div>
         <div className="grid lg:grid-cols-3 gap-4 justify-around">
            <div className="flex flex-col w-[300px]">
               <h2 className="text-lg">Hours</h2>
               <ul>
                  <li className="flex justify-between">
                     <span>Sunday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Monday</span>
                     <span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Tuesday</span>
                     <span>8AM - 8PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Wednesday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Thursday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Friday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Saturday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
               </ul>
            </div>
            <div className="flex flex-col w-[300px]">
               <h2 className="text-lg">Hours</h2>
               <ul>
                  <li className="flex justify-between">
                     <span>Sunday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Monday</span>
                     <span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Tuesday</span>
                     <span>8AM - 8PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Wednesday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Thursday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Friday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Saturday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
               </ul>
            </div>
            <div className="flex flex-col w-[300px]">
               <h2 className="text-lg">Hours</h2>
               <ul>
                  <li className="flex justify-between">
                     <span>Sunday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Monday</span>
                     <span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Tuesday</span>
                     <span>8AM - 8PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Wednesday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Thursday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Friday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
                  <li className="flex justify-between">
                     <span>Saturday</span>
                     <span>8 AM - 8 PM</span>
                  </li>
               </ul>
            </div>
         </div>
      </Layout>
   );
}
