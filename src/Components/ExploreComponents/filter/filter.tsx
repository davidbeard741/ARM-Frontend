import React, { useState } from "react";
import DropDown from "../../_common/Dropdown/DropDown";
import Input from "../../_common/Input/input";
import styles from "./filter.module.scss";
import { MdCancel } from "react-icons/md";
const Filter = () => {
  const [sortBy, setSortBy] = useState("Sort By");
  const sortOptions = ["Low to Hight", "High to Low", "New", "Old"];
  const [filterBy, setFilterBy] = useState("Filter");
  const filterOptions = [
    "Top",
    "Art",
    "Collectibles",
    "Domain Names",
    "Music",
    "Photography",
    "Sports",
    "Trading Cards",
    "Utility",
    "Virtual Worlds",
  ];
  let sortByFilter = sortOptions.find((item) => item === sortBy);
  let filterByFilter = filterOptions.find((item) => item === filterBy);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <div className={styles.leftWrapper}>
              <DropDown
                selected={sortBy}
                setSelected={setSortBy}
                options={sortOptions}
                showRightIcon={false}
              />
              <DropDown
                selected={filterBy}
                setSelected={setFilterBy}
                options={filterOptions}
                showRightIcon={false}
              />
            </div>
            <div className={styles.rightWrapper}>
              <Input placeholder="Search..." search={true} img2 />
            </div>
          </div>
          <div className={styles.btnWrapper}>
            {sortByFilter && <button>{sortByFilter}</button>}
            {filterByFilter && <button>{filterByFilter}</button>}
            {filterByFilter || sortByFilter ? (
              <div
                className={styles.resetBtn}
                onClick={() => {
                  setFilterBy("Filter");
                  setSortBy("Sort By");
                }}
              >
                <MdCancel />
                Reset filter
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
