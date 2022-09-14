import { Button } from "../../_common/Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label>
          Discover, collect,
          <br /> and sell extraordinary NFTs
        </label>
        <p>Explore the diverse NFT marketplace of Assets Recovery Management</p>
        <div className={styles.btn}>
          <Button
            Name="Discover More"
            bgactive={"transparent"}
            bghover={"#000000"}
            Coloractive={"#000000"}
            Colorhover={"#FFB718"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
