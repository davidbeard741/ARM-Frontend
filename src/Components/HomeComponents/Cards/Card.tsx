import { SwiperSlide } from "swiper/react";
import Slider from "../../_common/Slider/slider";
import styles from "./Card.module.scss";

const Card = () => {
  let data = [
    {
      id: 1,
      img: "https://d3bfm8su4pz02o.cloudfront.net/images/NFT1.svg",
      value: 0.1525,
      icon: "https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg",
    },
    {
      id: 2,
      img: "https://d3bfm8su4pz02o.cloudfront.net/images/NFT2.svg",
      value: 0.1525,
      icon: "https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg",
    },
    {
      id: 3,
      img: "https://d3bfm8su4pz02o.cloudfront.net/images/NFT3.svg",
      value: 0.1525,
      icon: "https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg",
    },
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
              <SwiperSlide className={styles.sliderWrapper} key={index}>
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
