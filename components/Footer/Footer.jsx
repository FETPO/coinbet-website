import React from "react";
import styles from "../../styles/Footer.module.scss";
import Twitter from "../Icons/Twitter";
import Discord from "../Icons/Discord";
import Github from "../Icons/Github";
import Medium from "../Icons/Medium";
import WebsiteLogo from "../Icons/WebsiteLogo";
import bgGradient from "../../assets/images/LandingPage/gradient.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.websiteFooter}>
      <div className="container">
        <div className={styles.footerNavigation}>
          <div className={styles.websiteLogo}>
            <WebsiteLogo />
            <p>
              Coinbet protocol brings DeFi to online betting. Permissionless
              and Decentralised.
            </p>
          </div>
          <div className={styles.nav}>
            <div className={styles.productsNav}>
              <h3>Products</h3>
              <a href="#">Coinbet Yield</a>
              <a href="#">Coinbet Play</a>
              <a href="#">Coinbet Plug and Play</a>
            </div>
            <div className={styles.infoNav}>
              <h3>Info</h3>
              <a href="#">Whitepaper</a>
              <a href="#">Team</a>
              <a href="#">Docs</a>
            </div>
          </div>
        </div>
        <div className={styles.footerSocials}>
          <div className={styles.socials}>
            <a href="https://twitter.com/CoinbetFi">
              <Twitter />
            </a>
            <a href="#">
              <Discord />
            </a>
            <a href="https://github.com/CoinbetFi">
              <Github />
            </a>
            <a href="#">
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
