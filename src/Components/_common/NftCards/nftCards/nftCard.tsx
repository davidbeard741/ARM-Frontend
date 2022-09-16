import React from "react";
import styles from "./nftCard.module.scss";
interface Props {
  img?: any;
  heading?: string;
  subHeading?: string;
  item: any;
}
const NftCard = (prop: Props) => {
  const { img, heading, subHeading } = prop;
  return (
    <>
      <div className={styles.cardWrapper}>
        <img src={img} alt='' />
        <div className={styles.textWrapper}>
          <label>{heading}</label>
          <p>{subHeading}</p>
        </div>
      </div>
    </>
  );
};

export default NftCard;
