import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../styles/PlayOrBecome.module.scss";
import logo from "../../../assets/images/LandingPage/wallet-and-chart.png";
import ChartArrow from "../../Icons/ChartArrow";
import Trophy from "../../Icons/Trophy";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const PlayOrBecome = () => {
  const [showNext, setShowNext] = useState(false);

  return (
    <div className={styles.playOrBecomeSection}>
      <div className={` container ${styles.playOrBecome}`}>
        <div className={styles.information}>
          <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay={100}>
            <h1 className={styles.title}>
              DeFi-enabled Web 3.0 Gambling dApps: <br />
              <span>The Future of Online Gaming</span>
            </h1>
          </AnimatedOnScroll>
          <div className={styles.pictureMobile}>
            <Image src={logo} alt="logo" />
          </div>
          <div className={styles.variants}>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={200}>
              <div className={styles.variant}>
                <div>
                  <ChartArrow />
                </div>
                <p>
                  Earn high yield as a Liquidity Provider in Coinbet&apos;s
                  House Pools - bankroll Web 3.0 betting games and get paid.
                </p>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={400}>
              <div className={styles.variant}>
                <div>
                  <Trophy />
                </div>
                <p>
                  Connect your Metamask
                  wallet to our dApp and experience true decentralization in
                  online gambling.
                </p>
              </div>
              {!showNext ? setShowNext(true) : ""}
            </AnimatedOnScroll>
          </div>
        </div>
        <AnimatedOnScroll animationIn="fadeIn" animationInDelay={600}>
          <div className={styles.picture}>
            <Image src={logo} alt="logo" />
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
};

export default PlayOrBecome;
