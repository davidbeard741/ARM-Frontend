import React from "react";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import styles from "./Header.module.scss";
import headerImg from "../../../Assets/backgrounds/HomeScreenHeader.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

interface Props {
  address: string;
  textToCopy: string;
}
const Header = (props: Props) => {
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
              <CopyToClipboard text={props.textToCopy}>
                <span onClick={() => toast.success("Address copied")}>
                  <MdOutlineContentCopy />
                </span>
              </CopyToClipboard>
              {/* <span>
                <IoMdSettings />
              </span> */}
            </div>
            {/* <div className={styles.subHeading}>
              <p>{props.address}</p>
              <span>
                <MdOutlineContentCopy />
              </span>
            </div> */}
            {/* <div className={styles.subHeading}>
              <p>{props.address}</p>
              <CopyToClipboard text={props.textToCopy}>
                <span onClick={() => setActive(true)}>
                  <MdOutlineContentCopy />
                </span>
              </CopyToClipboard>
            </div> */}
            {/* <div className={styles.copyText}>
              {active ? <div style={{ color: "green" }}>Copied.</div> : null}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
