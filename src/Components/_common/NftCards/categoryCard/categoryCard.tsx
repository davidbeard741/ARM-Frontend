import React from "react";
import styles from "./categoryCard.module.scss";
interface Props {
  img?: any;
  heading?: string;
  subHeading?: string;
  item?: any;
  Price?: number | string;
  lastSale?: number | string;
  onClick?: () => void;
}
const CategoryCard = (prop: Props) => {
  const { img, heading, subHeading, Price, lastSale, onClick } = prop;
  return (
    <>
      <div className={styles.cardWrapper}>
        <img src={img} alt="" />
        <div className={styles.textWrapper}>
          <label>{heading}</label>
          <p>{subHeading}</p>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.heading}>Price:</div>
          <div className={styles.mainWrapper}>
            <div className={styles.leftWrapper}>
              <img
                src={"https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg"}
                alt=""
              />
              <label>{Price ? Price : "-"}</label>
            </div>
            <div className={styles.rightWrapper}>
              Last Sale:{" "}
              <img
                src={"https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg"}
                alt=""
              />{" "}
              <label>{lastSale ? lastSale : "-"}</label>
            </div>
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <button onClick={onClick}>Make Offer</button>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
