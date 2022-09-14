import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "./DropDown.module.scss";
interface prop {
  selected?: {} | any;
  setSelected?: {} | any;
  options?: any[] | any;
  showRightIcon?: any;
}
const DropDown = (Props: prop) => {
  const { selected, setSelected, options, showRightIcon } = Props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownbtn}
        onClick={(e) => setIsActive(!isActive)}
      >
        {showRightIcon === false ? null : (
          <div className={styles.imgContainer}>
            <div className={styles.leftIcon}>
              <AiFillCaretDown />
            </div>
          </div>
        )}
        <span>{selected}</span>
        <div className={styles.withRightIcon}>
          <AiFillCaretDown />
        </div>
      </div>

      {isActive && (
        <div className={styles.dropdowncontent}>
          {options.map((option: any) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className={styles.dropdownitems}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
