import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import styles from "../Carousel.module.css";
import { BiLeftArrowAlt as LeftArrow } from "react-icons/bi";
// import { ReactComponent as LeftArrow } from "../../../assests/leftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  console.log({ left: swiper.isBeginning });

  return (
    <div
      className={`${styles.leftNavigation} w-5 h-5 rounded-full bg-green-500 flex justify-center items-center`}
    >
      <LeftArrow
        onClick={() => {
          swiper.slidePrev();
        }}
      />
    </div>
  );
};

export default CarouselLeftNavigation;
