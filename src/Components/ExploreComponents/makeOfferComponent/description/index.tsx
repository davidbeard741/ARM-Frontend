import React from "react";
import styles from "./description.module.scss";
import { RiHeart2Line } from "react-icons/ri";
import { RiHeart2Fill } from "react-icons/ri";
import DropDownTab from "../../../_common/DropDownTab";
let data = [
  {
    title: "Contract Address",
    dec: "12345678asdfghertyu567",
  },
  {
    title: "Token ID",
    dec: "123456789asdfghj123456789",
  },
  {
    title: "Token Standard",
    dec: "",
  },
  {
    title: "Blockchain",
    dec: "Solana",
  },
];
const Description = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img
            src={"https://d3bfm8su4pz02o.cloudfront.net/images/NFT1.svg"}
            alt=""
          />
          <div className={styles.imgIcons}>
            <div className={styles.leftWrapper}>
              <div className={styles.icon}>
                <RiHeart2Fill />
              </div>
              1,12
            </div>
            <div className={styles.rightWrapper}>
              <img
                src={"https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.decWrapper}>
          <div className={styles.header}>Description</div>
          <div className={styles.textWrapper}>
            <label>By Avrill15</label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              sagittis, nisl porttitor ante et viverra. Urna, vitae in quis
              tristique pellentesque congue. Neque netus tortor donec faucibus.
              Viverra pellentesque eu condimentum velit porttitor ornare.rttitor
              ante et viverra. Urna, vitae in quis tristique pellentesque
              congue. Neque netus tortor donec faucibus. Viverra pellentesque eu
              condimentum velit porttitor ornare.
            </p>
          </div>
          <div className={styles.contractClass}>
            {data.map((item) => (
              <div className={styles.textWrapper}>
                <label>{item.title}</label>
                <span>{item.dec}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.properties}>
          <DropDownTab style={{ minHeight: "260px" }} title="Properties">
            <div className={styles.cardWrapper}>
              {[...Array(6)].map((item) => (
                <div className={styles.card}>
                  <label>Enviroment</label>
                  <span>Forest</span>
                  <p>20% have this trait</p>
                </div>
              ))}
            </div>
          </DropDownTab>
        </div>
      </div>
    </div>
  );
};

export default Description;
