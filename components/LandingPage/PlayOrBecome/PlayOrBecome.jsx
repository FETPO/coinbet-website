import Image from "next/image";
import React from "react";
import styles from "../../../styles/PlayOrBecome.module.scss";
import logo from "../../../assets/images/LandingPage/wallet-and-chart.png";
import ChartArrow from "../../Icons/ChartArrow";
import Trophy from "../../Icons/Trophy";
const PlayOrBecome = () => {
  return (
    <div className={styles.playOrBecomeSection}>
      <div className={` container ${styles.playOrBecome}`}>
        <div className={styles.information}>
          <h1 className={styles.title}>
            Play the game or <br />
            <span>become the game</span>
          </h1>
          <div className={styles.pictureMobile}>
            <Image src={logo} alt="logo" />
          </div>
          <div className={styles.variants}>
            <div className={styles.variant}>
              <div>
                <ChartArrow />
              </div>
              <p>
                Earn Yield through bankrolling betting activities and earn a
                share from the rewards
              </p>
            </div>
            <div className={styles.variant}>
              <div>
                <Trophy />
              </div>
              <p>
                Bet on a truly decentralised blockchain betting games protocol
                with full transparency in regards to awarding prizes
              </p>
            </div>
          </div>
        </div>
        <div className={styles.picture}>
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default PlayOrBecome;
