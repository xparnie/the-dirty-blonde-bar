import type { EventFooterProps } from "@/interfaces";
import Link from "next/link";

const EventFooter: React.FC<EventFooterProps> = ({ url }): JSX.Element => (
   <footer>
      {url != null && (
         <Link
            type="button"
            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-xl px-6 py-3.5 text-center inline-flex items-center mr-2 mb-2"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
         >
            <svg
               className="w-5 h-5 mr-3 -ml-2"
               aria-hidden="true"
               focusable="false"
               data-prefix="fab"
               data-icon="facebook-f"
               role="img"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 320 512"
            >
               <path
                  fill="currentColor"
                  d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
               ></path>
            </svg>
            Facebook Group
         </Link>
      )}
   </footer>
);

export default EventFooter;
