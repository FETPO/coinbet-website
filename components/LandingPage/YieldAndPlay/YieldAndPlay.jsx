import Image from "next/image";
import React from "react";
import styles from "../../../styles/YieldAndPlay.module.scss";
import glossy from "../../../assets/images/LandingPage/glossy.png";
import Button from "../../Button/Button";
const YieldAndPlay = () => {
  return (
    <div className={`container ${styles.yieldAndPlaySection}`}>
      <div className={styles.logo}>
        <Image src={glossy} alt="glossy" />
      </div>
      <div className={styles.yieldAndPlay}>
        <h1 className={styles.title}>
          Coinbet Yield and Play Casino
        </h1>
        <p className={styles.desc}>
          Reward pools paired with betting games with pluggable reward strategies. We give the opportunity to everyone
          who wants to bankroll betting activities and earn a share of the profits. Players have full transparency in
          regards to awarding prizes, using a protocol that runs on fair, transparent, and immutable smart contracts.
        </p>
        <div className={styles.actionButtons}>
          <Button className="primary">Earn Yield</Button>
          <Button className="secondary">Start Betting</Button>
        </div>
      </div>
    </div>
  );
};

export default YieldAndPlay;
