import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import LandingPage from "./containers/LendingPage/LandingPage";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* HTML Meta Tags */}
        <title>Coinbet - Decentralized Web 3.0 Betting Protocol for High Yield and Fair Gambling</title>
        <meta
          name="description"
          content="Join Coinbet, the decentralized Web 3.0 betting protocol and experience high yield through bankrolling betting activities and provably fair blockchain gambling. Connect your Metamask wallet and play on our dApp now."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://coinbet.finance/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Coinbet - Decentralized Web 3.0 Betting Protocol for High Yield and Fair Gambling" />
        <meta
          property="og:description"
          content="Join Coinbet, the decentralized Web 3.0 betting protocol and experience high yield through bankrolling betting activities and provably fair blockchain gambling. Connect your Metamask wallet and play on our dApp now."
        />
        <meta property="og:image" content="https://coinbet.finance/preview.png" />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="coinbet.finance" />
        <meta property="twitter:url" content="https://coinbet.finance/" />
        <meta name="twitter:title" content="Coinbet - Decentralized Web 3.0 Betting Protocol for High Yield and Fair Gambling" />
        <meta
          name="twitter:description"
          content="Join Coinbet, the decentralized Web 3.0 betting protocol and experience high yield through bankrolling betting activities and provably fair blockchain gambling. Connect your Metamask wallet and play on our dApp now."
        />
        <meta name="twitter:image" content="https://coinbet.finance/preview.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="container">
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DTYWKJWT1E" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-DTYWKJWT1E');
            `}
        </Script>
        <Script id="prove-source" strategy="afterInteractive">
          {`
            !function(o,i){window.provesrc&&window.console&&console.error&&console.error("ProveSource is included twice in this page."),provesrc=window.provesrc={dq:[],display:function(){this.dq.push(arguments)}},o._provesrcAsyncInit=function(){provesrc.init({apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MzA2NjhkOTU1ZWFhYTJhY2E4YWIyMjgiLCJpYXQiOjE2NjEzNjQ0NDF9.3Um0kEli0J2sz47xWo1q-TMdmvNYBb7aOreYwSzhb2I",v:"0.0.4"})};var r=i.createElement("script");r.type="text/javascript",r.async=!0,r["ch"+"ar"+"set"]="UTF-8",r.src="https://cdn.provesrc.com/provesrc.js";var e=i.getElementsByTagName("script")[0];e.parentNode.insertBefore(r,e)}(window,document);
            `}
        </Script>
      </div>

      <Header />
      <main className={styles.main}>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
