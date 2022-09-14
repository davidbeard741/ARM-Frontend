import React, { useState } from "react";
import DropDown from "../../_common/Dropdown/DropDown";
import Input from "../../_common/Input/input";
import styles from "./filter.module.scss";
const Filter = () => {
  const [selected, setSelected] = useState("Dollar");
  const options = ["euro", "Dollar", "euro", "Dollar", "euro"];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <div className={styles.leftWrapper}>
              <DropDown
                selected={selected}
                setSelected={setSelected}
                options={options}
                showRightIcon={false}
              />
              <DropDown
                selected={selected}
                setSelected={setSelected}
                options={options}
                showRightIcon={false}
              />
            </div>
            <div className={styles.rightWrapper}>
              <Input placeholder="Search..." search={true} img2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
