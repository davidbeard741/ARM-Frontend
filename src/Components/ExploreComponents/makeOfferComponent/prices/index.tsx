import React from "react";
import DropDownTab from "../../../_common/DropDownTab";
import styles from "./prices.module.scss";
const Prices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headingWrapper}>
          <label>Avrill15</label>
          <p>
            Owned By <span>Avrill15</span>
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.header}>Sale ends September 12,2022</div>
          <div className={styles.price}>
            <label>Current Price</label>
            <p>
              <img
                src={"https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg"}
                alt=""
              />
              0.002391 <span>$152.21</span>
            </p>
          </div>
          <div className={styles.btnWrapper}>
            <button>Make Offer</button>
          </div>
        </div>
        <div className={styles.dropDownWrapper}>
          <DropDownTab title="Listings">
            <table cellSpacing="0">
              <tr>
                <th>Price</th>
                <th>USD Price</th>
                <th>Expiration</th>
                <th>From</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>$13.21</td>
                <td>Germany</td>
              </tr>
            </table>
          </DropDownTab>
        </div>
      </div>
    </div>
  );
};

export default Prices;
