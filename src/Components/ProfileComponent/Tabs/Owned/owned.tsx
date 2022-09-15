import React from "react";
import styles from "./owned.module.scss";
import NFT1 from "../../../../Assets/images/NFT1.svg";
const Owned = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.cardWrapper}>
            <img src={NFT1} alt="" />
            <div className={styles.textWrapper}>
              <label>LACOSTEMARA#012</label>
              <p>3 landars</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Owned;
