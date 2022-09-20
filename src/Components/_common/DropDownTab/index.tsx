import React, { Children, useState } from "react";
import styles from "./index.module.scss";
import bottomImg from "../../../Assets/icons/bottom.svg";
interface Props {
  children?: any;
  title?: string;
}
const DropDownTab = (prop: Props) => {
  const { children, title } = prop;
  const [active, setActive] = useState(true);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headerWrapper}>
            <div className={styles.leftWrapper}>{title}</div>
            <div className={styles.rightWrapper}>
              <img
                className={active ? styles.imgActive : styles.imgNotActive}
                src={bottomImg}
                alt=""
                onClick={() => setActive(!active)}
              />
            </div>
          </div>
          {active ? <div className={styles.bottomWrapper}>{children}</div> : ""}
        </div>
      </div>
    </>
  );
};

export default DropDownTab;
