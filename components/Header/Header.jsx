import React, { useState } from "react";
import styles from "../../styles/Header.module.scss";
import NavArrow from "../Icons/NavArrow";
import Button from "../Button/Button";
import MenuIcon from "../Icons/MenuIcon";
import WebsiteLogo from "./../Icons/WebsiteLogo";
import Popup from "reactjs-popup";
import SolidDefiIcon from "../Icons/SolidDefiIcon";
import { MiniSlotIcon } from "../Icons/MiniSlotIcon";
import MiniChartBarIcon from "../Icons/MiniChartBarIcon";
import DocumentDublicate from "../Icons/DocumentDublicate";
import TeamIcon from "../Icons/TeamIcon";
import ArchiveIcon from "../Icons/ArchiveIcon";
import Sidebar from "react-sidebar";
import CloseIcon from "../Icons/CloseIcon";
import Twitter from "../Icons/Twitter";
import Discord from "../Icons/Discord";
import Github from "../Icons/Github";
import Medium from "../Icons/Medium";
import { Tooltip } from "@chakra-ui/react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
    if (sidebarOpen) {
      document
        .querySelector(".sidebar-root")
        .classList.remove("sidbar-container");
      document.querySelector("html").classList.remove("fixed");
    } else {
      document.querySelector(".sidebar-root").classList.add("sidbar-container");
      document.querySelector("html").classList.add("fixed");
      // document.querySelector(".mobile-menu-logo").style.zIndex = "1";
    }
  };

  return (
    <div className={styles.websiteHeader}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.websiteLogo}>
            <WebsiteLogo />
          </div>
          <div className={styles.navbar}>
            <ul className={styles.nav}>
              <li>
                <Popup
                  trigger={
                    <div>
                      Products 
                      <NavArrow />
                    </div>
                  }
                  position="bottom center"
                  on="click"
                  closeOnDocumentClick
                  mouseLeaveDelay={300}
                  mouseEnterDelay={0}
                  className={styles.dropdown}
                  contentStyle={{
                    padding: "0px",
                    border: "none",
                    outline: "none",
                  }}
                  arrow={false}
                >
                  <div className={styles.dropdownMenu}>
                    <a
                      href="https://play.coinbet.finance/pools"
                      target={"_blank"}
                      className={styles.dropdownItem_1}
                      rel="noreferrer"
                    >
                      <div className={styles.dropdownItemLogo}>
                        <SolidDefiIcon />
                      </div>
                      <div className={styles.dropdownItemDetails}>
                        <h3>Coinbet Yield</h3>
                        <p>Earn yield through the protocol</p>
                      </div>
                    </a>
                    <a
                      href="https://play.coinbet.finance/games"
                      target={"_blank"}
                      className={styles.dropdownItem_2}
                      rel="noreferrer"
                    >
                      <div className={styles.dropdownItemLogo}>
                        <MiniSlotIcon />
                      </div>
                      <div className={styles.dropdownItemDetails}>
                        <h3>Coinbet Play</h3>
                        <p>Play decentralized betting games</p>
                      </div>
                    </a>
                    <Tooltip hasArrow label="Coming soon" variant={"black"}>
                      <div href="#" className={styles.dropdownItem_3}>
                        <div className={styles.dropdownItemLogo}>
                          <MiniChartBarIcon />
                        </div>
                        <div className={styles.dropdownItemDetails}>
                          <h3>Coinbet Plug and Play</h3>
                          <p>Deploy your own casino game</p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                </Popup>
              </li>
              <li>
                <Popup
                  trigger={
                    <div>
                      Info
                      <NavArrow />
                    </div>
                  }
                  position="bottom center"
                  on="click"
                  closeOnDocumentClick
                  mouseLeaveDelay={300}
                  mouseEnterDelay={0}
                  contentStyle={{ padding: "0px", border: "none" }}
                  arrow={false}
                >
                  <div className={styles.dropdownMenu}>
                    <a
                      href="https://docs.coinbet.finance"
                      target="_new"
                      className={styles.dropdownItem_3}
                    >
                      <div className={styles.dropdownItemLogo}>
                        <ArchiveIcon />
                      </div>
                      <div className={styles.dropdownItemDetails}>
                        <h3>Docs</h3>
                        <p>Get up and running on new features</p>
                      </div>
                    </a>
                    <a
                      href="https://coinbet.finance/whitepaper.pdf"
                      target="_new"
                      className={styles.dropdownItem_1}
                    >
                      <div className={styles.dropdownItemLogo}>
                        <DocumentDublicate />
                      </div>
                      <div className={styles.dropdownItemDetails}>
                        <h3>Whitepaper</h3>
                        <p>Technology and purpose of the project</p>
                      </div>
                    </a>
                    <a
                      href="https://coinbet.finance/pitchdeck.pdf"
                      target="_new"
                      className={styles.dropdownItem_2}
                    >
                      <div className={styles.dropdownItemLogo}>
                        <TeamIcon />
                      </div>
                      <div className={styles.dropdownItemDetails}>
                        <h3>Pitch Deck</h3>
                        <p>Check out our deck if you want to invest</p>
                      </div>
                    </a>
                  </div>
                </Popup>
              </li>
              <li>
                <Tooltip hasArrow label="Coming soon" variant={"black"}>
                  <div href="https://dao.coinbet.finance" target="_new">
                    Governance
                  </div>
                </Tooltip>
              </li>
            </ul>
            <div className={styles.navbarActions}>
              <Button
                onClick={() => window.open("https://play.coinbet.finance")}
                className="primary"
              >
                Enter Lobby
              </Button>
              <Button
                onClick={() => onSetSidebarOpen(true)}
                className="secondary onlyIcon"
              >
                <MenuIcon />
              </Button>
              <div className="mobile-menu">
                <Sidebar
                  sidebar={
                    <div className="sidbar-content">
                      <div className="sidebar-close">
                        <div className="sidebar-website-logo">
                          <WebsiteLogo />
                        </div>
                        <Button
                          onClick={() => onSetSidebarOpen(false)}
                          className="secondary onlyIcon"
                        >
                          <CloseIcon />
                        </Button>
                      </div>
                      <div className="main-content">
                        <div className="product-and-info">
                          <div className="products-section">
                            <h3>Products</h3>
                            <div>
                              <a href="#">Coinbet Yield</a>
                              <a href="#">Coinbet Play</a>
                              <a href="#">Coinbet Plug and Play</a>
                            </div>
                          </div>
                          <div className="info-section">
                            <h3>Info</h3>
                            <div>
                              <a
                                href="https://docs.coinbet.finance"
                                target="_new"
                              >
                                Docs
                              </a>
                              <a
                                href="https://coinbet.finance/whitepaper.pdf"
                                target="_new"
                              >
                                Whitepaper
                              </a>
                              <a
                                href="https://dao.coinbet.finance"
                                target="_new"
                              >
                                Governance
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-footer">
                          <Button className="primary">Enter Lobby</Button>
                          <div className="nav">
                            <a
                              href="https://twitter.com/CoinbetFi"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Twitter />
                            </a>
                            <a
                              href="https://discord.gg/zgGaKuj4US"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Discord />
                            </a>
                            <a
                              href="https://github.com/CoinbetFi"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Github />
                            </a>
                            <a
                              href="https://medium.com/coinbet"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Medium />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  open={sidebarOpen}
                  onSetOpen={onSetSidebarOpen}
                  styles={{
                    sidebar: {
                      background: "#F3F5F8",
                      borderLeft: "1px solid #E3E4EC",
                      boxShadow: "0px 10px 36px rgba(76, 80, 89, 0.12)",
                    },
                  }}
                  rootClassName={"sidebar-root"}
                  sidebarClassName={"sidebar"}
                  contentClassName={"sidebar-content"}
                  overlayClassName={"sidbar-overlay"}
                  pullRight
                >
                  <button
                    className="sidebar-action"
                    onClick={() => onSetSidebarOpen(true)}
                  ></button>
                </Sidebar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
