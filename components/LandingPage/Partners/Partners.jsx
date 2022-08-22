import React from "react";
import styles from "../../../styles/Partners.module.scss";
import binanceSmart from "../../../assets/images/LandingPage/binance-smart.svg";
import binanceLabs from "../../../assets/images/LandingPage/binance-labs.svg";
import moralisLogo from "../../../assets/images/LandingPage/moralis-logo.svg";
import Image from "next/image";
import ChainlinkIcon from "../../Icons/ChainlinkIcon";
import PolygonIcon from "../../Icons/PolygonIcon";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Partners = () => {
  return (
    <div className={` container ${styles.partners}`}>
      <AnimatedOnScroll animationIn="fadeIn" animationInDelay={200}>
        <div>
          <ChainlinkIcon />
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeIn" animationInDelay={300}>
        <div>
          <PolygonIcon />
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeIn" animationInDelay={400}>
        <div>
          <Image src={binanceSmart} alt="icon" />
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeIn" animationInDelay={500}>
        <div>
          <Image src={moralisLogo} width={150} height={45} alt="icon" />
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default Partners;
