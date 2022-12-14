import React from "react";
import styles from "../../styles/Footer.module.scss";
import Twitter from "../Icons/Twitter";
import Discord from "../Icons/Discord";
import Github from "../Icons/Github";
import Medium from "../Icons/Medium";
import WebsiteLogo from "../Icons/WebsiteLogo";
import bgGradient from "../../assets/images/LandingPage/gradient.png";
import Image from "next/image";
import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.websiteFooter}>
      <div className="container">
        <div className={styles.footerNavigation}>
          <div className={styles.websiteLogo}>
            <WebsiteLogo />
            <p>
              Coinbet protocol brings DeFi to online betting. Permissionless and
              Decentralized.
            </p>
          </div>
          <div className={styles.nav}>
            <div className={styles.productsNav}>
              <h3>Products</h3>
                <a href="https://play.coinbet.finance/reward-pool" target={'_blank'} rel="noreferrer">Coinbet Yield</a>
                <a href="https://play.coinbet.finance/slot-game" target={'_blank'} rel="noreferrer">Coinbet Play</a>
              <Tooltip hasArrow label="Coming soon" variant={"black"}>
                <a href="">Coinbet Plug and Play</a>
              </Tooltip>
            </div>
            <div className={styles.infoNav}>
              <h3>Info</h3>
              <a href="https://docs.coinbet.finance" target='_new'>Docs</a>
              <a href="https://coinbet.finance/whitepaper.pdf" target='_new'>Whitepaper</a>
              <a href="https://coinbet.finance/pitchdeck.pdf" target='_new'>Pitch Deck</a>
            </div>
          </div>
        </div>
        <div className={styles.footerSocials}>
          <div className={styles.socials}>
            <a href="https://twitter.com/CoinbetFi" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
            <a href="https://discord.gg/zgGaKuj4US" target="_blank" rel="noreferrer">
              <Discord />
            </a>
            <a href="https://github.com/CoinbetFi" target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a href="https://medium.com/coinbet" target="_blank" rel="noreferrer">
              <Medium />
            </a>
          </div>
          <p className={styles.copyright}>
            © 2022 CoinbetFi. All right reserved.
          </p>
        </div>
      </div>
      <div className={styles.bg}>
        <Image src={bgGradient} alt="bgGradient" />
      </div>
    </div>
  );
};

export default Footer;
