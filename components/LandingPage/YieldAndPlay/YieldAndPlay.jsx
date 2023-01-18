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
            Coinbet is a decentralized Web 3.0 betting protocol, founded with the
            mission to enable users to earn yield through bankrolling betting
            activities, as well as to empower players to gamble on a provably
            fair blockchain betting protocol.
          </p>
        </AnimatedOnScroll>
        <div className={styles.actionButtons}>
          <AnimatedOnScroll animationIn="fadeIn" animationInDelay={400}>
            <Button
              onClick={() =>
                window.open("https://play.coinbet.finance/pools")
              }
              className="primary"
            >
              Earn Yield
            </Button>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="fadeIn" animationInDelay={500}>
            <Button
              onClick={() =>
                window.open("https://play.coinbet.finance/games")
              }
              className="secondary"
            >
              Start Betting
            </Button>
          </AnimatedOnScroll>
        </div>
      </div>
    </div>
  );
};

export default YieldAndPlay;
