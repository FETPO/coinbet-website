import Image from "next/image";
import React from "react";
import styles from "../../../styles/DefiSlots.module.scss";
import glossy from "../../../assets/images/LandingPage/glossy.png";
import Button from "../../Button/Button";
const DefiSlots = () => {
  return (
    <div className={`container ${styles.defiSlotsSection}`}>
      <div className={styles.logo}>
        <Image src={glossy} alt="glossy" />
      </div>
      <div className={styles.defiSlots}>
        <h1 className={styles.title}>DeFi Slots</h1>
        <p className={styles.desc}>
          Bankroll Pools paired with Betting games with pluggable Reward
          Strategies. Take on the house with the super low house edge, where
          there is only one green number and plenty of winning combinations!
          This Roulette game is bound to keep you invested and intrigued with
          every spin as you look for different ways to turn profit!
        </p>
        <div className={styles.actionButtons}>
          <Button className="primary">Earn Yield</Button>
          <Button className="secondary">Start Betting</Button>
        </div>
      </div>
    </div>
  );
};

export default DefiSlots;
