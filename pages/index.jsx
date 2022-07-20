import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import LandingPage from "./containers/LendingPage/LandingPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* HTML Meta Tags */}
        <title>CoinbetFi - Building the bridge between DeFi and online betting</title>
        <meta
          name="description"
          content="Coinbet protocol brings DeFi to online betting. Permissionless and Decentralised."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://coinbet.finance/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CoinbetFi - Building the bridge between DeFi and online betting" />
        <meta
          property="og:description"
          content="Coinbet protocol brings DeFi to online betting. Permissionless and Decentralised."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/coinbet-finance.appspot.com/o/CoinbetFi.png?alt=media"
        />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="coinbet.finance" />
        <meta property="twitter:url" content="https://coinbet.finance/" />
        <meta name="twitter:title" content="CoinbetFi - Building the bridge between DeFi and online betting" />
        <meta
          name="twitter:description"
          content="Coinbet protocol brings DeFi to online betting. Permissionless and Decentralised."
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/coinbet-finance.appspot.com/o/CoinbetFi.png?alt=media"
        />
      </Head>

      <Header />
      <main className={styles.main}>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
