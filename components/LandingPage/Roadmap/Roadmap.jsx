import React, { useEffect } from "react";
import styles from "../../../styles/Roadmap.module.scss";

const Roadmap = () => {
  useEffect(() => {
    let scrollable = document.querySelector(".scrollable");

    function onWheel(event) {
      event.preventDefault();

      scrollable.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    }

    if (scrollable && screen.width > 768) {
      scrollable.addEventListener("wheel", onWheel);
    }

    return () => scrollable.removeEventListener("wheel", onWheel);
  }, []);
  return (
    <div className={`${styles.roadmapSection}`}>
      <h1 className={`container ${styles.title}`}>Our Roadmap</h1>
      <div className={styles.roadmapSlider}>
        <div className="scrollable">
          <div className={styles.roadmap}>
            <div className={styles.number}>01</div>
            <p className={styles.date}>September 2022</p>
            <h3 className={styles.subtitle}>Launch Degen Slots, powered by Coinbet</h3>
            <p className={styles.desc}>
              DeFi Slots game with Rewards Liquidity pool (Mainnet, Polygon, BSC), powered by Coinbet.
            </p>
          </div>
          <div className={styles.roadmap}>
            <div className={styles.number}>02</div>
            <p className={styles.date}>November 2022</p>
            <h3 className={styles.subtitle}>Launch Coinbet Yield and Play Casino</h3>
            <p className={styles.desc}>
            Yield generating reward pools paired with betting games with pluggable reward strategies. 
            </p>
          </div>
          <div className={styles.roadmap}>
            <div className={styles.number}>04</div>
            <p className={styles.date}>September 2023</p>
            <h3 className={styles.subtitle}>
              Launch Coinbet Plug and Play platform
            </h3>
            <p className={styles.desc}>
            Deploy and launch your own casino games - with custom token, game and RTP percentages
            </p>
          </div>
          <div className={styles.roadmap}>
            <div className={styles.number}>03</div>
            <p className={styles.date}>February 2023</p>
            <h3 className={styles.subtitle}>Launch Governance - CoinbetDAO</h3>
            <p className={styles.desc}>
              Yield Farming for Coinbet Governance Token and DAO activation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
