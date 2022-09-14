import { useConnection } from "@solana/wallet-adapter-react";
import React, { FC } from "react";
import { useMetaplex } from "../../../hooks/useMetaplex";
import { createNFT } from "../../../services/metaplex.service";
import { Button } from "../../_common/Button/Button";
import Input from "../../_common/Input/input";
import styles from "./nft.module.scss";
const CreateNFT: FC = () => {
  const { metaplex } = useMetaplex();
  const { connection } = useConnection();
  const onClickCreate = async () => {
    await createNFT({
      metaplex: metaplex!,
      metadata: {
        name: "My NFT",
        description: "My description",
        symbol: "MYNFT",
        imageURI: "https://placekitten.com/200/300",
      },
    });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <label>Create NFT</label>
          <div className={styles.nftWrapper}>
            <div className={styles.leftWrapper}>
              <div className={styles.imgWrapper}>
                <input type='file' accept='image/*' />
              </div>
            </div>
            <div className={styles.rightWrapper}>
              <h2>Basic Information</h2>
              <div className={styles.inputsfieldswrapper}>
                <div className={styles.titleWrapper}>
                  <div className={styles.inputwrapper}>
                    <p>Name</p>
                    <Input type='text' Name='name' placeholder='Name' />
                  </div>
                  <div className={styles.inputwrapper}>
                    <p>Symbol</p>
                    <Input type='text' Name='name' placeholder='Symbol' />
                  </div>
                </div>

                <div className={styles.textarea}>
                  <label>Description</label>
                  <div className={styles.InputWrapper}>
                    <textarea
                      rows={10}
                      className={styles.textArea}
                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac ultricies ut diam libero, non at luctus ante. Tempus venenatis gravida diam facilisis non. Ultrices etiam ut sit scelerisque. Et in fusce cursus sodales aliquam vel vitae odio malesuada. Sed velit, diam mauris euismod malesuada vestibulum at sed. Viverra nec eget pulvinar sed id quam ultrices pharetra sit. '
                    />
                  </div>
                </div>

                <div className={styles.advanceinfoWrapper}>
                  <label>Advanced Information</label>
                  <div className={styles.inputwrapper}>
                    <p>URL (External)</p>
                    <Input type='text' Name='name' placeholder='URL' />
                  </div>
                  <div className={styles.titleWrapper}>
                    <div className={styles.inputwrapper}>
                      <p>Collectible Group</p>
                      <Input type='text' Name='name' placeholder='Group' />
                    </div>

                    <div className={styles.inputwrapper}>
                      <p>Identifier Name</p>
                      <Input
                        type='text'
                        Name='name'
                        placeholder='Identifier Name'
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.attributesWrapper}>
                  <label>Attributes</label>
                  <div className={styles.inputs}>
                    <div className={styles.inputwrapper}>
                      <p>Attribute Name</p>
                      <Input type='text' Name='name' placeholder='Name' />
                    </div>

                    <div className={styles.inputwrapper}>
                      <p>Attribute value</p>
                      <Input type='text' Name='name' placeholder='value' />
                    </div>
                  </div>
                  <div className={styles.btnWrapper}>
                    <div className={styles.btn}>
                      <Button
                        Name='Add Attribute'
                        bgactive='transparent'
                        borderHover='2px solid black'
                        Coloractive='black'
                        Colorhover='#fff'
                        bghover='#ffb718'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.createbtn}>
                <div className={styles.btnActive}>
                  <Button
                    onClick={onClickCreate}
                    Name='Create NFT'
                    bgactive='#ffb718'
                    borderHover='none'
                    Coloractive='#fff'
                    Colorhover='#ffb718'
                    bghover='transparent'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNFT;
