import Card from "../../Components/HomeComponents/Cards/Card";
import Category from "../../Components/HomeComponents/Category";
import Header from "../../Components/HomeComponents/Header/Header";
import Work from "../../Components/HomeComponents/Works";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Card />
        <Work />
        <Category />
      </div>
    </>
  );
};

export default Home;
