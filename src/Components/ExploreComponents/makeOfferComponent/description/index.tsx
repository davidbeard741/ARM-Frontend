import React from "react";
import styles from "./description.module.scss";
import { RiHeart2Line } from "react-icons/ri";
import { RiHeart2Fill } from "react-icons/ri";
import DropDownTab from "../../../_common/DropDownTab";

type Props = {
  attributes: any;
  imageURI: string;
  description: string;
  tokenID: string;
  creatorEarnings: number;
};

const Description = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={props.imageURI} alt='' />
          <div className={styles.imgIcons}>
            {/* <div className={styles.leftWrapper}>
              <div className={styles.icon}>
                <RiHeart2Fill />
              </div>
              1,12
            </div> */}
            <div className={styles.rightWrapper}>
              <img
                src={"https://d3bfm8su4pz02o.cloudfront.net/icons/NFTIcon.svg"}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className={styles.decWrapper}>
          <div className={styles.header}>Description</div>
          <div className={styles.textWrapper}>
            {/* <label>By Avrill15</label> */}
            <p>{props.description}</p>
          </div>
          <div className={styles.contractClass}>
            <div className={styles.textWrapper}>
              <label>Contract Address</label>
              <span>TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA</span>
            </div>
            <div className={styles.textWrapper}>
              <label>Token ID</label>
              <span>{props.tokenID}</span>
            </div>
            <div className={styles.textWrapper}>
              <label>Token Standard</label>
              <span>Metaplex</span>
            </div>
            <div className={styles.textWrapper}>
              <label>Blockchain</label>
              <span>Solana</span>
            </div>
            <div className={styles.textWrapper}>
              <label>Metadata</label>
              <span>Arweave</span>
            </div>
            <div className={styles.textWrapper}>
              <label>Creator Earnings</label>
              <span>{props.creatorEarnings}%</span>
            </div>
          </div>
        </div>
        <div className={styles.properties}>
          <DropDownTab style={{ minHeight: "260px" }} title='Properties'>
            <div className={styles.cardWrapper}>
              {props.attributes
                ? props.attributes.map((item: any) => (
                    <div className={styles.card}>
                      <label>{item.trait_type}</label>
                      <span></span>
                      <p>{item.value}</p>
                    </div>
                  ))
                : null}
            </div>
          </DropDownTab>
        </div>
      </div>
    </div>
  );
};

export default Description;
