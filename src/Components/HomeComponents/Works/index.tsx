import data from "./data";
import styles from "./index.module.scss";
const Work = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <label>How It Works</label>
          <div className={styles.cardWrapper}>
            {data.map((item, index) => (
              <div className={styles.card} key={index}>
                <img src={item.img} alt="" />
                <label>{item.heading}</label>
                <p>{item.pera}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
