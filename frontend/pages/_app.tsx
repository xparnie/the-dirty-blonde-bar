import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans, Roboto_Condensed } from "next/font/google";
import Head from "next/head";

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

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
   <>
      <Head>
         <title>The Dirty Blonde Bar and Grill</title>

         <meta name="title" content="The Dirty Blonde Bar and Grill" />
         <meta name="description" content="The Dirty Blonde Bar and Grill" />
      </Head>
      <style jsx global>{`
         :root {
            --font-openSans: ${openSans.style.fontFamily};
            --font-roboto-condensed: ${robotoCondensed.style.fontFamily};
         }
      `}</style>
      <Component {...pageProps} />
   </>
);

export default App;
