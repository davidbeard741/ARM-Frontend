import React from "react";
import { useLocation } from "react-router-dom";
import { calculateCreatorEarning } from "../../../services/nft.service";
import DropDownTab from "../../_common/DropDownTab";
import Description from "./description";
import styles from "./makeOffer.module.scss";
import Prices from "./prices";
const MakeOffer = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mainWrapper}>
          <div className={styles.leftWrapper}>
            <Description
              attributes={location.state.attributes}
              creatorEarnings={calculateCreatorEarning(
                location.state.sellerFeeBasisPoints
              )}
              tokenID={location.state.mintAddress.toString()}
              description={location.state.description}
              imageURI={location.state.image}
            />
          </div>
          <div className={styles.rightWrapper}>
            <Prices
              currentPrice={0.002391}
              name={location.state.name}
              showSale={false}
            />
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          {" "}
          <DropDownTab title='Item Activity'>
            <div className={styles.dropDownWrapper}>
              <table cellSpacing='0'>
                <tr>
                  <th>Event</th>
                  <th>Price</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Date</th>
                </tr>

                <tr>
                  <td>Transfer</td>
                  <td>$13.21</td>
                  <td>Germany</td>
                  <td>X1v1</td>
                  <td>10 Days Ago</td>
                </tr>
              </table>
            </div>
          </DropDownTab>
        </div>
      </div>
    </div>
  );
};

export default MakeOffer;
