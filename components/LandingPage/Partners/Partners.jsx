import React from "react";
import styles from "../../../styles/Partners.module.scss";
import binanceSmart from "../../../assets/images/LandingPage/binance-smart.svg";
import binanceLabs from "../../../assets/images/LandingPage/binance-labs.svg";
import Image from "next/image";
import ChainlinkIcon from "../../Icons/ChainlinkIcon";
import PolygonIcon from "../../Icons/PolygonIcon";

const Partners = () => {
  return (
    <div className={` container ${styles.partners}`}>
      <div>
        <ChainlinkIcon />
      </div>
      <div>
        <PolygonIcon />
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
