import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import styles from "./Header.module.scss";
import headerImg from "../../../Assets/backgrounds/HomeScreenHeader.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Header = () => {
  const [active, setActive] = useState(false);
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
              <CopyToClipboard text="1234567890qwertyuiopasdfghjkl">
                <span onClick={() => setActive(true)}>
                  <MdOutlineContentCopy />
                </span>
              </CopyToClipboard>
            </div>
            <div className={styles.copyText}>
              {active ? <div style={{ color: "green" }}>Copied.</div> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
