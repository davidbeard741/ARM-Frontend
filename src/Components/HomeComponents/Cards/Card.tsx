import React from "react";
import styles from "./Card.module.scss";
import NFT1 from "../../../Assets/images/NFT1.svg";
import NFT2 from "../../../Assets/images/NFT2.svg";
import NFT3 from "../../../Assets/images/NFT3.svg";
import icon from "../../../Assets/icons/NFTIcon.svg";
import Slider from "../../_common/Slider/slider";
import { SwiperSlide } from "swiper/react";

const Card = () => {
  let data = [
    {
      id: 1,
      img: NFT1,
      value: 0.1525,
      icon: icon,
    },
    {
      id: 2,
      img: NFT2,
      value: 0.1525,
      icon: icon,
    },
    {
      id: 3,
      img: NFT3,
      value: 0.1525,
      icon: icon,
    },
    // {
    //   id: 3,
    //   img: NFT3,
    //   value: 0.1525,
    //   icon: icon,
    // },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.Heading}>New Drops</div>

        <div className={styles.cardWrapper}>
          <Slider>
            <div className={styles.CardGradient}></div>
            <div className={styles.CardGradient1}></div>
            {data.map((item, index) => (
              <SwiperSlide className={styles.sliderWrapper}>
                <div className={styles.Card}>
                  <img src={item.img} alt="" />
                  <div className={styles.overLay}>
                    <div className={styles.innerCOntetnt}>
                      <div className={styles.imgHeading}>
                        <img src={item.icon} alt="" />
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Card;
