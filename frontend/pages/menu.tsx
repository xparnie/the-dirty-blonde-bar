import MenuList from "@/components/MenuList";
import PageTitle from "@/components/PageTitle";
import Layout from "@/components/global/Layout";
import Head from "next/head";

const pageTitle = "Menu";

const Menu: React.FC = (): JSX.Element => (
   <>
      <Head>
         <title>Menu - The Dirty Blonde Bar and Grill</title>
      </Head>
      <Layout currentPage={pageTitle}>
         <PageTitle title={pageTitle} />
         <div className="grid gap-3 lg:grid-cols-2 items-center sm:items-start">
            <MenuList />
         </div>
      </Layout>
   </>
);

export default Menu;
