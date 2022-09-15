import React from "react";
import styles from "./owned.module.scss";
import NFT1 from "../../../../Assets/images/NFT1.svg";
import NftCard from "../../../_common/NftCards/nftCards/nftCard";
import NoDataFound from "../../../_common/noData/noDataFound";
const Owned = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* {[...Array(0)] ? (
            <NoDataFound />
          ) : ( */}
          <div className={styles.cardWrapper}>
            {[...Array(2)].map((item) => (
              <NftCard
                img={NFT1}
                heading="LACOSTEMARA#012"
                subHeading="3 landars"
              />
            ))}
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default Owned;
