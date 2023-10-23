import React, { useEffect } from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
const Controls = ({ data }) => {
  const swiper = useSwiper();
  // console.log("SWIPER FROM CONTROL", swiper);
  useEffect(() => {
    swiper.slideTo(0, 0);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderComponent }) => {
  const swiper = useSwiper();
  if (!data) return;

  return (
    <div className={`${styles.wrapper} mt-2 mb-2`}>
      <Swiper
        initialSlide={0}
        modules={Navigation}
        slidesPerView={"auto"}
        spaceBetween={10}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />

        <CarouselRightNavigation />

        {data.map((item) => (
          <SwiperSlide>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
