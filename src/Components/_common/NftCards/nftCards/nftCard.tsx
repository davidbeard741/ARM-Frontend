import React from "react";
import styles from "./nftCard.module.scss";
interface Props {
  img?: any;
  heading?: string;
  subHeading?: string;
}
const NftCard = (prop: Props) => {
  const { img, heading, subHeading } = prop;
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <img src={img} alt="" />
        <div className={styles.textWrapper}>
          <label>LACOSTEMARA#012</label>
          <p>3 landars</p>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
