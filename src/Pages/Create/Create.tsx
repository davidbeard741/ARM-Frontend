import CreateNFT from "../../Components/CreateNftComponents/CreateNFT/CreateNft";
import styles from "./Create.module.scss";

const Create = () => {
  return (
    <>
      <div className={styles.container}>
        <CreateNFT />
      </div>
    </>
  );
};

export default Create;
