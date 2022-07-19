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
            <h3 className={styles.subtitle}>Launch first product</h3>
            <p className={styles.desc}>
              DeFi Slots game with Liquidity pool (Mainnet, Polygon, BSC)
            </p>
          </div>
          <div className={styles.roadmap}>
            <div className={styles.number}>02</div>
            <p className={styles.date}>November 2022</p>
            <h3 className={styles.subtitle}>Launch ZeroLoss Slots game</h3>
            <p className={styles.desc}>
              Generating prizes using various DeFi protocols - Compound, YFI,
              etc.
            </p>
          </div>
          <div className={styles.roadmap}>
            <div className={styles.number}>03</div>
            <p className={styles.date}>February 2023</p>
            <h3 className={styles.subtitle}>Launch Governance - CoinbetDAO</h3>
            <p className={styles.desc}>
              Yield Farming for CoinbetFi Governance Token
            </p>
          </div>
          <div className={styles.roadmap}>
            <div className={styles.number}>04</div>
            <p className={styles.date}>September 2023</p>
            <h3 className={styles.subtitle}>
              Launch multiple betting and NFT games
            </h3>
            <p className={styles.desc}>
              Roulette, Coin Flip, NFT gambles after community voting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
