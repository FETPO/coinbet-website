import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import LandingPage from "./containers/LendingPage/LandingPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CoinbetFi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
