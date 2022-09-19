import styles from "./noData.module.scss";
const NoDataFound = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            src={"https://d3bfm8su4pz02o.cloudfront.net/gif/noDataFound.gif"}
            alt=""
          />
          <label>NO Data Found</label>
        </div>
      </div>
    </>
  );
};

export default NoDataFound;
