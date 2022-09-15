import React from "react";
import NftCard from "../../../_common/NftCards/nftCards/nftCard";
import styles from "./created.module.scss";
import NFT1 from "../../../../Assets/images/NFT1.svg";

const Created = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.cardWrapper}>
            {[...Array(1)].map((item) => (
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

export default Created;
