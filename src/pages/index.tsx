import { type NextPage } from "next";
import Head from "next/head";
import Banner from "~/components/pages/Homepage/Banner";
import Header from "~/components/pages/Homepage/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>atdani.nl</title>
        <meta name="title" content="atdani.nl" />
        <meta name="description" content="Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
      </main>
    </>
  );
};

export default Home;
