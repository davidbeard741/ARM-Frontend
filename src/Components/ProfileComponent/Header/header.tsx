import React from "react";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import styles from "./Header.module.scss";
import headerImg from "../../../Assets/backgrounds/HomeScreenHeader.svg";
const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <img src={headerImg} alt="" />
          </div>
          <div className={styles.headingWrapper}>
            <div className={styles.heading}>
              <label>John Doe</label>
              <span>
                <IoMdSettings />
              </span>
            </div>
            <div className={styles.subHeading}>
              <p>1234567890qwertyuiopasdfghjkl</p>
              <span>
                <MdOutlineContentCopy />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
