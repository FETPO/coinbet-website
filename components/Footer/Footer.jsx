import React from "react";
import styles from "../../styles/Footer.module.scss";
import websiteLogo from "../../assets/images/website-logo.png";
import Image from "next/image";
import Twitter from "../Icons/Twitter";
import Discord from "../Icons/Discord";
import Github from "../Icons/Github";
import Medium from "../Icons/Medium";

const Footer = () => {
  return (
    <div className={styles.websiteFooter}>
      <div className="container">
        <div className={styles.footerNavigation}>
          <div className={styles.websiteLogo}>
            <Image src={websiteLogo} alt="website-logo" />
            <p>
              CoinbetFi protocol brings DeFi to online betting. Permissionless
              and Decentralised.
            </p>
          </div>
          <div className={styles.nav}>
            <div className={styles.productsNav}>
              <h3>Products</h3>
              <p>DeFi Slots</p>
              <p>NoLoss Slots</p>
              <p>Earn Yield</p>
            </div>
            <div className={styles.infoNav}>
              <h3>Info</h3>
              <p>Whitepaper</p>
              <p>Team</p>
              <p>Docs</p>
            </div>
          </div>
        </div>
        <div className={styles.footerSocials}>
          <div className={styles.socials}>
            <div>
              <Twitter />
            </div>
            <div>
              <Discord />
            </div>
            <div>
              <Github />
            </div>
            <div>
              <Medium />
            </div>
          </div>
          <p className={styles.copyright}>
            © 2022 CoinbetFi. All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
