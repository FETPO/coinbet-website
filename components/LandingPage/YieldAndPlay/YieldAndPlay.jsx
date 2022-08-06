import Image from "next/image";
import React from "react";
import styles from "../../../styles/YieldAndPlay.module.scss";
import glossy from "../../../assets/images/LandingPage/glossy.png";
import Button from "../../Button/Button";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const YieldAndPlay = () => {
  return (
    <div className={`container ${styles.yieldAndPlaySection}`}>
      <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay={0}>
        <div className={styles.logo}>
          <Image src={glossy} alt="glossy" />
        </div>
      </AnimatedOnScroll>
      <div className={styles.yieldAndPlay}>
        <AnimatedOnScroll animationIn="fadeIn" animationInDelay={200}>
          <h1 className={styles.title}>Coinbet Yield and Play Casino</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeIn" animationInDelay={300}>
          <p className={styles.desc}>
            Reward pools paired with betting games with pluggable reward
            strategies. We give the opportunity to everyone who wants to
            bankroll betting activities and earn a share of the profits. Players
            have full transparency in regards to awarding prizes, using a
            protocol that runs on fair, transparent, and immutable smart
            contracts.
          </p>
        </AnimatedOnScroll>
        <div className={styles.actionButtons}>
          <AnimatedOnScroll animationIn="fadeIn" animationInDelay={400}>
            <Button className="primary">Earn Yield</Button>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="fadeIn" animationInDelay={500}>
            <Button className="secondary">Start Betting</Button>
          </AnimatedOnScroll>
        </div>
      </div>
    </div>
  );
};

export default YieldAndPlay;
