import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import "./slider.scss";

interface prop {
  children: any;
}

const slider = (Props: prop) => {
  const { children } = Props;
  return (
    <>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Swiper
          slidesPerView={3}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            766: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 3,
            },
            1265: {
              slidesPerView: 3,
            },
          }}
          navigation={false}
          autoplay={{
            delay: 10000,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};

export default slider;
