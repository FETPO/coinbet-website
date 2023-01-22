import Image from "next/image";
import React from "react";
import styles from "../../../styles/HeroSection.module.scss";
import Button from "../../Button/Button";
import slot from "../../../assets/images/LandingPage/slot.png";
import bgGradient from "../../../assets/images/LandingPage/gradient.png";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const HeroSection = () => {
  return (
    <div className={` ${styles.heroSection}`}>
      <div className="container">
        <AnimatedOnScroll animationIn="fadeIn" animationInDelay={200}>
          <div className={styles.information}>
            <h1 className={styles.title}>
              Next Generation Web 3.0 Casino <span> DeFi Protocol</span>
            </h1>
            <h2 className={styles.description}>
              Experience the Future of Web 3.0 Gambling: <br></br> Non-Custodial, Permissionless, and Decentralized
            </h2>
            <div className={styles.actions}>
              <Button onClick={() =>  window.open('https://play.coinbet.finance/pools')}  className="primary">Earn Yield</Button>
              <Button onClick={() =>  window.open('https://play.coinbet.finance/games')}  className="secondary">Start Betting</Button>
            </div>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeIn" animationInDelay={200}>
          <div className={styles.heroImage}>
            <Image src={slot} alt="slot" />
          </div>
        </AnimatedOnScroll>
      </div>
      <div className={styles.bg}>
        <Image src={bgGradient} alt="bgGradient" />
      </div>
    </div>
  );
};

export default HeroSection;
