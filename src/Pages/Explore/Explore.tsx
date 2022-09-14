import CategoryOne from "../../Components/ExploreComponents/CategoryOne";
import Filter from "../../Components/ExploreComponents/filter/filter";
import styles from "./Explore.module.scss";

const Explore = () => {
  return (
    <>
      <div className={styles.container}>
        <Filter />
        <CategoryOne />
      </div>
    </>
  );
};

export default Explore;
