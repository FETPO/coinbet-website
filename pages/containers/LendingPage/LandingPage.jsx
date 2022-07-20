import React from "react";
import YieldAndPlay from "../../../components/LandingPage/YieldAndPlay/YieldAndPlay";
import HeroSection from "../../../components/LandingPage/HeroSection/HeroSection";
import CoinbetBuidl from "../../../components/LandingPage/CoinbetBuidl/CoinbetBuidl";
import Partners from "../../../components/LandingPage/Partners/Partners";
import PlayOrBecome from "../../../components/LandingPage/PlayOrBecome/PlayOrBecome";
import Roadmap from "../../../components/LandingPage/Roadmap/Roadmap";
import styles from "./LendingPage.module.scss";
const LandingPage = () => {
  return (
    <div className={styles.lendingPageContainer}>
      <HeroSection />
      <Partners />
      <div className={styles.whiteContainer}>
        <PlayOrBecome />
        <YieldAndPlay />
        <CoinbetBuidl />
      </div>
      <Roadmap />
    </div>
  );
};

export default LandingPage;
