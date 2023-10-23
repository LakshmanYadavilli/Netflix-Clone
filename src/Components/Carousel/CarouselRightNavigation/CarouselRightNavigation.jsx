import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { BiRightArrowAlt as RightArrow } from "react-icons/bi";
import styles from "../Carousel.module.css";
// import { ReactComponent as RightArrow } from "../../../assests/rightArrow.svg";
// import { useSelector, useDispatch } from "react-redux";
// import { updateChecks } from "../../Slices/checkSlice";
const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  console.log({ right: swiper.isEnd });

  return (
    <div
      className={`${styles.rightNavigation} w-5 h-5 rounded-full bg-green-500 flex justify-center items-center`}
    >
      <RightArrow onClick={() => swiper.slideNext()} />
    </div>
  );
};

export default CarouselRightNavigation;
