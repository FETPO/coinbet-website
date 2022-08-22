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
                      Products <NavArrow />
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
                    <Tooltip hasArrow label="Coming soon" variant={"black"}>
                      <div href="#" className={styles.dropdownItem_1}>
                        <div className={styles.dropdownItemLogo}>
                          <SolidDefiIcon />
                        </div>
                        <div className={styles.dropdownItemDetails}>
                          <h3>Coinbet Yield</h3>
                          <p>Earn yield through the protocol</p>
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip hasArrow label="Coming soon" variant={"black"}>
                      <div href="#" className={styles.dropdownItem_2}>
                        <div className={styles.dropdownItemLogo}>
                          <MiniSlotIcon />
                        </div>
                        <div className={styles.dropdownItemDetails}>
                          <h3>Coinbet Play</h3>
                          <p>Play decentralized betting games</p>
                        </div>
                      </div>
                    </Tooltip>
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
                    <a href="#" className={styles.dropdownItem_1}>
                      <div className={styles.dropdownItemLogo}>
                        <DocumentDublicate />
                      </div>
                      <div className={styles.dropdownItemDetails}>
                        <h3>Whitepaper</h3>
                        <p>Technology and purpose of the project</p>
                      </div>
                    </a>
                    <a href="#" className={styles.dropdownItem_2}>
                      <div className={styles.dropdownItemLogo}>
                        <TeamIcon />
                      </div>
                      <div className={styles.dropdownItemDetails}>
                        <h3>Team</h3>
                        <p>Get to know the people behind Coinbet</p>
                      </div>
                    </a>
                    <a href="#" className={styles.dropdownItem_3}>
                      <div className={styles.dropdownItemLogo}>
                        <ArchiveIcon />
                      </div>
                      <div className={styles.dropdownItemDetails}>
                        <h3>Docs</h3>
                        <p>Get up and running on new features</p>
                      </div>
                    </a>
                  </div>
                </Popup>
              </li>
              <li>
                <a href="#">Governance</a>
              </li>
            </ul>
            <div className={styles.navbarActions}>
              <Button className="primary">Launch App</Button>
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
                              <a href="#">Whitepaper</a>
                              <a href="#">Team</a>
                              <a href="#">Docs</a>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-footer">
                          <Button className="primary">Launch App</Button>
                          <div className="nav">
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
