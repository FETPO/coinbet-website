import React, { useEffect } from "react";
import styles from "../../../styles/Roadmap.module.scss";
import RoadmapCarousel from "./RoadmapCarousel";

const Roadmap = () => {
  // useEffect(() => {
  //   let scrollable = document.querySelector(".scrollable");

  //   function onWheel(event) {
  //     event.preventDefault();

  //     scrollable.scrollBy({
  //       left: event.deltaY < 0 ? -30 : 30,
  //     });
  //   }

  //   if (scrollable && screen.width > 768) {
  //     scrollable.addEventListener("wheel", onWheel);
  //   }

  //   return () => scrollable.removeEventListener("wheel", onWheel);
  // }, []);
  return (
    <div className={`${styles.roadmapSection}`}>
      <h1 className={`container ${styles.title}`}>Our Roadmap</h1>
      <RoadmapCarousel />
    </div>
  );
};

export default Roadmap;
