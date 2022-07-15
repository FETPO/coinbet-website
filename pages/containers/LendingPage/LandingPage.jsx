import React from "react";
import DefiSlots from "../../../components/LandingPage/DefiSlots/DefiSlots";
import HeroSection from "../../../components/LandingPage/HeroSection/HeroSection";
import NoLossSlots from "../../../components/LandingPage/NoLossSlots/NoLossSlots";
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
        <DefiSlots />
        <NoLossSlots />
      </div>
      <Roadmap />
    </div>
  );
};

export default LandingPage;
