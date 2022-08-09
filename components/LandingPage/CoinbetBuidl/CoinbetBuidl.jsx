import React from "react";
import styles from "../../../styles/CoinbetBuidl.module.scss";
import Button from "../../Button/Button";
import slot from "../../../assets/images/LandingPage/slot-in-hends.png";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Image from "next/image";
const CoinbetBuidl = () => {
  return (
    <div className={`container ${styles.coinbetBuidlSection}`}>
      <AnimatedOnScroll animationIn="fadeIn" animationInDelay={100}>
        <div className={styles.coinbetBuidl}>
          <h1 className={styles.title}>Coinbet Plug and Play Platform</h1>
          <p className={styles.desc}>
            <span>
              Create your own casino - with custom token, game and RTP{" "}
            </span>
            Coinbet provides users with the ability to launch their own
            decentralized casino games with several clicks. Casino games
            creators can choose from different games, ERC20 tokens, and RTP
            percentages, connecting their own pools or using our community
            pools.
          </p>
          <div className={styles.actionButtons}>
            <Button className="primary">Deploy Game</Button>
          </div>
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeInUp" animationInDelay={100}>
        <div className={styles.logo}>
          <Image src={slot} alt="slot" />
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default CoinbetBuidl;
