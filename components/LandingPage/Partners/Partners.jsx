import React from "react";
import styles from "../../../styles/Partners.module.scss";
import chainlink from "../../../assets/images/LandingPage/chainlink.png";
import polygon from "../../../assets/images/LandingPage/polygon.png";
import binanceSmart from "../../../assets/images/LandingPage/binance-smart.png";
import binanceLabs from "../../../assets/images/LandingPage/binance-labs.png";
import Image from "next/image";

const Partners = () => {
  return (
    <div className={` container ${styles.partners}`}>
      <div>
        <Image src={chainlink} alt="icon" />
      </div>
      <div>
        <Image src={polygon} alt="icon" />
      </div>
      <div>
        <Image src={binanceSmart} alt="icon" />
      </div>
      <div>
        <Image src={binanceLabs} alt="icon" />
      </div>
    </div>
  );
};

export default Partners;
