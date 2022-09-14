import DataFile from "./data";
import styles from "./Footer.module.scss";
import footerImg from "../../../Assets/logo/footerLogo.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
          <div className={styles.leftWrapper}>
            <label>Follow us on social media platforms</label>
            <p>
              Follow ARM on social media handles to never miss out another
              update
              <br /> on drops, sales and other exclusive content to come.
            </p>
          </div>
          <div className={styles.rightWrapper}>
            {DataFile.ImgData.map((item: any) => (
              <div className={styles.imgWrapper}>
                <item.img />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.leftWrapper}>
            <img src={footerImg} alt="" />
            <p>
              ARM is a premium NFT marketplace for select NFTs to mint, exhibit,
              host
              <br /> and bid.
            </p>
          </div>
          <div className={styles.rightWrapper}>
            <div className={styles.linkWrapper}>
              <label>Marketplace</label>
              <ul>
                {DataFile.marketplace.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.linkWrapper}>
              <label>My Account</label>
              <ul>
                {DataFile.Account.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.linkWrapper}>
              <label>Company</label>
              <ul>
                {DataFile.Company.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <label>
            Copyright © 2022, ARM • Privacy Policy • Terms & Conditions
          </label>
        </div>
      </div>
    </div>
  );
};

export default Footer;
