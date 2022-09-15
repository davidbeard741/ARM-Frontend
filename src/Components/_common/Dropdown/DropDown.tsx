import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
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
              <FiChevronDown />
            </div>
          </div>
        )}
        <span>{selected}</span>
        <div className={styles.withRightIcon}>
          <FiChevronDown />
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
