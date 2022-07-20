import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import LandingPage from "./containers/LendingPage/LandingPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CoinbetFi - Building the bridge between DeFi and online betting</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/> 
        <meta name="description" content="Coinbet protocol brings DeFi to online betting. Permissionless and Decentralised." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://coinbet.finance/"/>
        <meta property="og:title" content="CoinbetFi - Building the bridge between DeFi and online betting"/>
        <meta property="og:description" content="Coinbet protocol brings DeFi to online betting. Permissionless and Decentralised."/>
        <meta property="og:image" content="/preview-image.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://coinbet.finance/"/>
        <meta property="twitter:title" content="CoinbetFi"></meta>
        <meta property="twitter:description" content="Coinbet protocol brings DeFi to online betting. Permissionless and Decentralised."/>
        <meta property="twitter:image" content="/preview-image.png"/>
      </Head>

      <Header />
      <main className={styles.main}>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
