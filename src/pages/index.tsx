import { type NextPage } from "next";
import Head from "next/head";
import Banner from "~/components/molecules/Banner";
import Header from "~/components/molecules/Header";

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
