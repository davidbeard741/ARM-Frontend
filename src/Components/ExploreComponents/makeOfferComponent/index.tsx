import React from "react";
import Description from "./description";
import styles from "./makeOffer.module.scss";
import Prices from "./prices";
const MakeOffer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <Description />
        </div>
        <div className={styles.rightWrapper}>
          <Prices />
        </div>
      </div>
    </div>
  );
};

export default MakeOffer;
