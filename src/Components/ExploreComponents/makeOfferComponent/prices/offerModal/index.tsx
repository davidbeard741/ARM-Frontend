import React, { useState } from "react";
import { Button } from "../../../../_common/Button/Button";
import DropDown from "../../../../_common/Dropdown/DropDown";
import Input from "../../../../_common/Input/input";
import styles from "./offerModal.module.scss";
const OfferModal = () => {
  const [sortBy, setSortBy] = useState("Sort By");
  const sortOptions = ["Weth", "Weth", "Weth", "Weth"];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <label>Make An Offer</label>
          <div className={styles.inputWrapper}>
            <div className={styles.firstWrapper}>
              <div className={styles.leftSide}>
                <div className={styles.heading}>Bid Amount</div>
                <div className={styles.dropDown}>
                  <DropDown
                    selected={sortBy}
                    setSelected={setSortBy}
                    options={sortOptions}
                    showRightIcon={false}
                  />
                </div>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.heading}>Available: 12.342 SOL</div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    Name="name"
                    style={{ height: "42px" }}
                    placeholder="Enter Amount..."
                  />
                </div>
                <div className={styles.heading}>
                  Total amount Bid: 12.342 SOL
                </div>
              </div>
            </div>
            <div className={styles.secWrapper}>
              <div className={styles.leftSide}>
                <div className={styles.heading}>Bid Amount</div>
                <div className={styles.dropDown}>
                  <DropDown
                    selected={sortBy}
                    setSelected={setSortBy}
                    options={sortOptions}
                    showRightIcon={false}
                  />
                </div>
              </div>
              <div className={styles.rightSide}>
                <Input
                  type="text"
                  Name="name"
                  style={{ height: "42px" }}
                  placeholder="Enter Amount..."
                />
              </div>
            </div>
            <Button
              Name="Finish Offer"
              bgactive="#ffb718"
              borderHover="none"
              Coloractive="#fff"
              Colorhover="#ffb718"
              bghover="transparent"
              height="47px"
              lapheight="37px"
              type="submit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferModal;
