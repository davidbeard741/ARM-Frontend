import React from "react";
import CategoryCard from "../../_common/NftCards/categoryCard/categoryCard";
import styles from "./Categorytwo.module.scss";
import nft1 from "../../../Assets/images/NFT1.svg";

const CategoryTwo = () => {
  const eventHandler = () => {
    console.log(">>>>>Clicked");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <label>Category 2</label>
            <p>See collection</p>
          </div>
          <div className={styles.cardWrapper}>
            {[...Array(4)].map(() => (
              <div className={styles.card}>
                <CategoryCard
                  img={nft1}
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

export default CategoryTwo;
