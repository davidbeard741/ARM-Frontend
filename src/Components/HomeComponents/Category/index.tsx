import styles from "./index.module.scss";
let data = [
  {
    id: 1,
    img: "https://d3bfm8su4pz02o.cloudfront.net/images/Category1.svg",
    name: "Category 1",
  },
  {
    id: 2,
    img: "https://d3bfm8su4pz02o.cloudfront.net/images/Category2.svg",
    name: "Category 2",
  },
  {
    id: 3,
    img: "https://d3bfm8su4pz02o.cloudfront.net/images/Category3.svg",
    name: "Category 3",
  },
];
const Category = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <label>Browse by category</label>
          <div className={styles.cardWrapper}>
            {data.map((item, index) => (
              <div className={styles.card} key={index}>
                <img src={item.img} alt="" />
                <div className={styles.btn}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
