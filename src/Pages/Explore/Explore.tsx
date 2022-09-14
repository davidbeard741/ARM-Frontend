import CreateNFT from "../../Components/ExploreComponents/CreateNFT/CreateNft";
import styles from "./Explore.module.scss";

const Explore = () => {
  return (
    <>
      <div className={styles.container}>
        <CreateNFT />
      </div>
    </>
  );
};

export default Explore;
