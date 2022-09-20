import React, { Children, useState } from "react";
import styles from "./index.module.scss";
import bottomImg from "../../../Assets/icons/bottom.svg";
interface Props {
  children?: any;
  title?: string;
  style?: any;
}
const DropDownTab = (prop: Props) => {
  const { children, title, style } = prop;
  const [active, setActive] = useState(true);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headerWrapper}>
            <div className={styles.leftWrapper}>{title}</div>
            <div
              className={styles.rightWrapper}
              onClick={() => setActive(!active)}
            >
              <img
                className={active ? styles.imgActive : styles.imgNotActive}
                src={bottomImg}
                alt=""
              />
            </div>
          </div>
          {active ? (
            <div className={styles.bottomWrapper} style={style}>
              {children}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default DropDownTab;
