import React from "react";
import styles from "../../styles/Header.module.scss";
import Image from "next/image";
import websiteLogo from "../../assets/images/website-logo.png";
import NavArrow from "../Icons/NavArrow";
import Button from "../Button/Button";
import MenuIcon from "../Icons/MenuIcon";

const Header = () => {
  return (
    <div className={styles.websiteHeader}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.websiteLogo}>
            <Image src={websiteLogo} alt="website-logo" />
          </div>
          <div className={styles.navbar}>
            <ul className={styles.nav}>
              <li>
                <a
                  href="https://discord.gg/8d9TRNspct"
                  target="_blank"
                  rel="noreferrer"
                >
                  Products
                  <NavArrow />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+Ta9SRQuD8BhiMmVk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Info
                  <NavArrow />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/defiroot"
                  target="_blank"
                  rel="noreferrer"
                >
                  Governance
                  <NavArrow />
                </a>
              </li>
            </ul>
            <div className={styles.navbarActions}>
              <Button className="primary ">Launch App</Button>
              <Button className="secondary  onlyIcon">
                <MenuIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
