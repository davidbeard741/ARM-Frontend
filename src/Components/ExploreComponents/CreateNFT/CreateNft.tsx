import { FC } from "react";
import { IoMdImages } from "react-icons/io";
import { Button } from "../../_common/Button/Button";
import Input from "../../_common/Input/input";
import styles from "./nft.module.scss";
import useNft from "./useNft";

const CreateNFT: FC = () => {
  const { formik, loading } = useNft();

  return (
    <>
      <form className={styles.container} onSubmit={formik.handleSubmit}>
        <div className={styles.wrapper}>
          <label>Create NFT</label>
          <div className={styles.nftWrapper}>
            <div className={styles.leftWrapper}>
              <label
                className={
                  formik.values.files ? styles.imgWrapper2 : styles.imgWrapper
                }
                form='inputimage'
              >
                <input
                  type='file'
                  accept='image/*'
                  id='inputimage'
                  onChange={ev => {
                    if (ev?.target?.files)
                      formik.setFieldValue("files", ev?.target?.files);
                  }}
                />
                <div className={styles.img}>
                  {formik.values.files ? (
                    <img src={URL.createObjectURL(formik.values.files[0])} />
                  ) : (
                    <>
                      <IoMdImages />
                      <label>Drag or pinch to choose an Image</label>
                    </>
                  )}
                </div>
              </label>
              {formik.errors.files && formik.touched.files ? (
                <div style={{ color: "#E5516B" }}>{formik.errors.files}</div>
              ) : null}
            </div>
            <div className={styles.rightWrapper}>
              <h2>Basic Information</h2>
              <div className={styles.inputsfieldswrapper}>
                <div className={styles.titleWrapper}>
                  <div className={styles.inputwrapper}>
                    <p>Name</p>
                    <Input
                      type='text'
                      Name='name'
                      placeholder='Name'
                      config={formik.getFieldProps("name")}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <div style={{ color: "#E5516B" }}>
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className={styles.inputwrapper}>
                    <p>Symbol</p>
                    <Input
                      type='text'
                      Name='name'
                      placeholder='Symbol'
                      config={formik.getFieldProps("symbol")}
                    />
                    {formik.errors.symbol && formik.touched.symbol ? (
                      <div style={{ color: "#E5516B" }}>
                        {formik.errors.symbol}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className={styles.textarea}>
                  <label>Description</label>
                  <div className={styles.InputWrapper}>
                    <textarea
                      rows={10}
                      className={styles.textArea}
                      placeholder='Description'
                      {...formik.getFieldProps("description")}
                    />
                    {formik.errors.description && formik.touched.description ? (
                      <div style={{ color: "#E5516B" }}>
                        {formik.errors.description}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* <div className={styles.advanceinfoWrapper}>
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
                        Name="Add Attribute"
                        bgactive="transparent"
                        borderHover="2px solid black"
                        Coloractive="black"
                        Colorhover="#fff"
                        bghover="#ffb718"
                        height="47px"
                        lapheight="37px"
                      />
                    </div>
                  </div>
                </div> */}
              </div>

              <div className={styles.createbtn}>
                <div className={styles.btnActive}>
                  <Button
                    disabled={loading}
                    Name='Create NFT'
                    bgactive='#ffb718'
                    borderHover='none'
                    Coloractive='#fff'
                    Colorhover='#ffb718'
                    bghover='transparent'
                    height='47px'
                    lapheight='37px'
                    type='submit'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateNFT;
