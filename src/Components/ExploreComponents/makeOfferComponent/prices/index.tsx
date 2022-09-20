import { useEffect, useState } from "react";
import { Button } from "../../../_common/Button/Button";
import DropDown from "../../../_common/Dropdown/DropDown";
import DropDownTab from "../../../_common/DropDownTab";
import Modal from "../../../_common/modal";
import BarChart from "../BarChart/BarChart";
import OfferModal from "./offerModal";
import styles from "./prices.module.scss";
import axios from "axios";
import { getSolanaUSDPrice } from "../../../../services/api.service";
type Props = {
  showSale: boolean;
  name: string;
  currentPrice: number;
};
const Prices = (props: Props) => {
  const [solanaPrice, setSolanaPrice] = useState("0");
  const [filterBy, setFilterBy] = useState("All Time");
  const filterOptions = ["Top"];
  const [popupvisible, setpopupvisible] = useState(false);
  const togglepopup = (e: any) => {
    e.preventDefault();
    setpopupvisible((preview) => !preview);
  };

  useEffect(() => {
    getSolanaUSDPrice().then((res) => {
      setSolanaPrice(res);
    });
  }, []);
  return (
    <>
      <Modal visible={popupvisible} btn onClose={() => setpopupvisible(false)}>
        <OfferModal />
      </Modal>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headingWrapper}>
            <label>{props.name}</label>
            {/* <p>
            Owned By <span>Avrill15</span>
          </p> */}
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.header}>Sale ends September 12,2022</div>
            <div className={styles.price}>
              <label>Current Price</label>
              <p>
                <img
                  src={
                    "https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg"
                  }
                  alt=""
                />
                {props.currentPrice}
                <span>${props.currentPrice * Number(solanaPrice)}</span>
              </p>
            </div>
            <div className={styles.btnWrapper}>
              <button onClick={togglepopup}>Make Offer</button>
            </div>
          </div>
          <div className={styles.dropDownWrapper}>
            <DropDownTab title="Price History">
              <table cellSpacing="0">
                <tr>
                  <th>Price</th>
                  <th>USD Price</th>
                  <th>Expiration</th>
                  <th>From</th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <img
                      src={
                        "https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg"
                      }
                      alt=""
                    />{" "}
                    0.0213
                  </td>
                  <td>$13.21</td>
                  <td>Germany</td>
                  <td>X1v1</td>
                  <td>
                    <button>Buy</button>
                  </td>
                </tr>
              </table>
            </DropDownTab>
            <DropDownTab title="Listings">
              <div className={styles.graphDropDown}>
                <div className={styles.dropDown}>
                  <DropDown
                    selected={filterBy}
                    setSelected={setFilterBy}
                    options={filterOptions}
                    showRightIcon={false}
                  />
                </div>

                <div className={styles.textArea}>
                  <label>Absolute Avg Price</label>
                  <p>
                    {" "}
                    <img
                      src={
                        "https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg"
                      }
                      alt=""
                    />
                    0.921
                  </p>
                </div>
              </div>
              <BarChart />
            </DropDownTab>
            <DropDownTab title="Offers">
              <table cellSpacing="0">
                <tr>
                  <th>Price</th>
                  <th>USD Price</th>
                  <th>Expiration</th>
                  <th>From</th>
                  <th></th>
                </tr>
                {[...Array(4)].map(() => (
                  <tr>
                    <td>
                      <img
                        src={
                          "https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg"
                        }
                        alt=""
                      />{" "}
                      0.0213
                    </td>
                    <td>$13.21</td>
                    <td>Germany</td>
                    <td>X1v1</td>
                    <td>
                      <button>Buy</button>
                    </td>
                  </tr>
                ))}
              </table>
            </DropDownTab>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prices;
