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
              Play the game or <br />
              <span>become the game</span>
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
                  Earn yield through bankrolling betting activities and earn a
                  share from the rewards, all comlpetely decentralised.
                </p>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={400}>
              <div className={styles.variant}>
                <div>
                  <Trophy />
                </div>
                <p>
                  Bet on a truly decentralised blockchain betting games protocol
                  with full transparency in regards to awarding prizes.
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
