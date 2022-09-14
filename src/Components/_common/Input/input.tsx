import React from "react";
import styles from "./input.module.scss";
import { FiSearch } from "react-icons/fi";
interface prop {
  style?: any;
  img?: any;
  type?: string;
  placeholder?: string;
  value?: number | any;
  disable?: any;
  Name?: string;
  onClick?: (prop: any) => any;
  config?: any;
  img2?: any;
  imgOnClick?: (prop: any) => any;
  search?: boolean;
}
function Input(Props: prop) {
  const {
    style,
    img,
    type,
    placeholder,
    value,
    disable,
    Name,
    onClick,
    config,
    img2,
    search,
    imgOnClick,
  } = Props;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper} style={style}>
          {img && <img src={img} alt="" />}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disable}
            name={Name}
            // required
            onClick={onClick}
            {...config}
          />
          {img2 && (
            <span onClick={imgOnClick}>
              {search ? <FiSearch /> : <img src={img2} alt="" />}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
