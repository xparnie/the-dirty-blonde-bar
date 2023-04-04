import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Open_Sans, Roboto_Condensed } from "next/font/google";

const openSans = Open_Sans({
   weight: ["400"],
   subsets: ["latin"],
   variable: "--font-openSans",
});

const robotoCondensed = Roboto_Condensed({
   weight: ["400", "700"],
   subsets: ["latin"],
   variable: "--font-roboto-condensed",
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <style jsx global>{`
            :root {
               --font-openSans: ${openSans.style.fontFamily};
               --font-roboto-condensed: ${robotoCondensed.style.fontFamily};
            }
         `}</style>
         <Component {...pageProps} />
      </>
   );
}
