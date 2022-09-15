import React from "react";
import styles from "./owned.module.scss";
import NFT1 from "../../../../Assets/images/NFT1.svg";
import NftCard from "../../../_common/NftCards/nftCards/nftCard";
const Owned = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.cardWrapper}>
            {[...Array(10)].map((item) => (
              <NftCard
                img={NFT1}
                heading="LACOSTEMARA#012"
                subHeading="3 landars"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Owned;
