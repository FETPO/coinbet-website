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
              Web 3.0 Gambling dApp <br />
              <span>with DeFi capabilities</span>
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
                  Become a (LP) liquidity provider in one of Coinbet&apos;s
                  House Pools and earn yield by bankrolling our Web 3.0 betting
                  games.
                </p>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={400}>
              <div className={styles.variant}>
                <div>
                  <Trophy />
                </div>
                <p>
                  Connect your Metamask wallet to our decentralized gambling
                  dApp and bet on a truly decentralized blockchain betting games.
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
