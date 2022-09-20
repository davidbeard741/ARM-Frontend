import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../_common/NftCards/categoryCard/categoryCard";
import styles from "./CategoryOne.module.scss";

const CategoryOne = () => {
  const navigation = useNavigate()
  const eventHandler = () => {
    navigation("/make-offer")
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <label>Category 1</label>
            <p>See collection</p>
          </div>
          <div className={styles.cardWrapper}>
            {[...Array(4)].map(() => (
              <div className={styles.card}>
                <CategoryCard
                  img={"https://d3bfm8su4pz02o.cloudfront.net/images/NFT1.svg"}
                  heading="LACOSTEMARA#012"
                  subHeading="3 landars skhfsdkjfhjksdhfkshdkfhsdkjhfsdjkfhksjdhfjkshdkfjh sadkfhaskjfhaskjhfkjash"
                  Price="20000"
                  lastSale="2055"
                  onClick={() => eventHandler()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryOne;
