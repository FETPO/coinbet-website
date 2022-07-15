import React from "react";
import styles from "../../../styles/NoLossSlots.module.scss";
import Button from "../../Button/Button";
import slot from "../../../assets/images/LandingPage/slot-in-hends.png";
import Image from "next/image";
const NoLossSlots = () => {
  return (
    <div className={`container ${styles.noLossSlotsSection}`}>
      <div className={styles.noLossSlots}>
        <h1 className={styles.title}>NoLoss Slots</h1>
        <p className={styles.desc}>
          <span> No loss betting games - slots, roulettes and some more. </span>
          Take on the house with the super low house edge, where there is only
          one green number and plenty of winning combinations! This Roulette
          game is bound to keep you invested and intrigued with every spin as
          you look for different ways to turn profit!
        </p>
        <div className={styles.actionButtons}>
          <Button className="primary">Earn Yield</Button>
          <Button className="secondary">Start Betting</Button>
        </div>
      </div>
      <div className={styles.logo}>
        <Image src={slot} alt="slot" />
      </div>
    </div>
  );
};

export default NoLossSlots;
