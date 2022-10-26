import React, { Component } from "react";
import Slider from "react-slick";
import "../../../styles/Roadmap.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: false,
      prevArrow: <></>,
      nextArrow: <></>,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider {...settings}>
          <div className={"roadmap"}>
            <div className={"number"}>01</div>
            <p className={"date"}>Q4 2022</p>
            <h3 className={"subtitle"}>
              Launch NFT themed Slots, powered by Coinbet
            </h3>
            <p className={"desc"}>
              DeFi Slots game with House Pool for LP providers, powered by
              Coinbet.
            </p>
          </div>
          <div className={"roadmap"}>
            <div className={"number"}>02</div>
            <p className={"date"}>Q1 2023</p>
            <h3 className={"subtitle"}>
              Launch Coinbet Yield and Play Web 3.0 Casino
            </h3>
            <p className={"desc"}>
              Non-custodial Web 3.0 casino with multiple gambling dApps and
              House Pools for liquidity providers (LPs).
            </p>
          </div>
          <div className={"roadmap"}>
            <div className={"number"}>03</div>
            <p className={"date"}>Q2 2023</p>
            <h3 className={"subtitle"}>Launch Governance - CoinbetDAO</h3>
            <p className={"desc"}>
              Yield Farming for Coinbet Governance Token and DAO activation.
            </p>
          </div>
          <div className={"roadmap"}>
            <div className={"number"}>04</div>
            <p className={"date"}>Q3 2023</p>
            <h3 className={"subtitle"}>
              Launch Coinbet Plug and Play platform
            </h3>
            <p className={"desc"}>
              Deploy and launch your own Web 3.0 casino games - with custom token, game
              and RTP percentages.
            </p>
          </div>
        </Slider>
      </>
    );
  }
}
