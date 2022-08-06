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
              Become the house or win the jackpot. <span> Choice is yours</span>
            </h1>
            <p className={styles.description}>
              Coinbet protocol brings DeFi to online betting. Permissionless and
              Decentralised.
            </p>
            <div className={styles.actions}>
              <Button className="primary">Earn Yield</Button>
              <Button className="secondary">Start Betting</Button>
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
