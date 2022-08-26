import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Scrollbar } from "swiper";

import image from "../../images/slider-image.png";
import image1 from "../../images/slider-image1.png";

import classes from "./Carousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./Carousel.style.scss";

const Carousel= () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide
      >
        <div className={classes["slider"]}>
          <img
            className={classes["slider__image"]}
            src={image}
            alt="iWatch Apple"
          />
          <div className={classes["slider__item"]}>
            <h1 className={classes["slider__title"]}>
              Color your days with small joy
            </h1>
            <button className={classes["slider__btn"]}>shop now</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
      >
        <div className={classes["slider"]}>
          <img
            className={classes["slider__image"]}
            src={image1}
            alt="iWatch Apple"
          />
          <div className={classes["slider__item"]}>
            <h1 className={classes["slider__title"]}>
              Color your days with small joy
            </h1>
            <button className={classes["slider__btn"]}>shop now</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel