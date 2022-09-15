import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import styles from "./Header.module.scss";
import headerImg from "../../../Assets/backgrounds/HomeScreenHeader.svg";
<<<<<<< HEAD

interface Props {
  address: string;
}
const Header = (props: Props) => {
=======
import { CopyToClipboard } from "react-copy-to-clipboard";
const Header = () => {
  const [active, setActive] = useState(false);
>>>>>>> f12f1bfd5764e58c6f145491fbac3660ca79ca3d
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <img src={headerImg} alt='' />
          </div>
          <div className={styles.headingWrapper}>
            <div className={styles.heading}>
              <label>{props.address}</label>
              <span>
                <MdOutlineContentCopy />
              </span>
              {/* <span>
                <IoMdSettings />
              </span> */}
            </div>
<<<<<<< HEAD
            {/* <div className={styles.subHeading}>
              <p>{props.address}</p>
              <span>
                <MdOutlineContentCopy />
              </span>
            </div> */}
=======
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
>>>>>>> f12f1bfd5764e58c6f145491fbac3660ca79ca3d
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
