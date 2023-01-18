import React from "react";
import styles from "../../../styles/Partners.module.scss";
import ChainlinkIcon from "../../Icons/ChainlinkIcon";
import PolygonIcon from "../../Icons/PolygonIcon";
import TheGraphIcon from "../../Icons/TheGraphIcon";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import AlchemyIcon from "../../Icons/AlchemyIcon";

const Partners = () => {
  return (
    <div className={` container ${styles.partners}`}>
      <AnimatedOnScroll animationIn="fadeIn" animationInDelay={200}>
        <div>
          <PolygonIcon />
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeIn" animationInDelay={300}>
        <div>
          <ChainlinkIcon />
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeIn" animationInDelay={400}>
        <div>
          <TheGraphIcon />
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeIn" animationInDelay={500}>
        <div>
          <AlchemyIcon />
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default Partners;
