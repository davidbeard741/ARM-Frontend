import { FC, useState } from "react";
import { IoMdImages } from "react-icons/io";
import { Button } from "../../_common/Button/Button";
import Input from "../../_common/Input/input";
import LoaderSpinner from "../../_common/loaderSpinner/loaderSpinner";
import styles from "./nft.module.scss";
import useNft from "./useNft";
import { ColorRing } from "react-loader-spinner";

const CreateNFT: FC = () => {
  const { formik, loading } = useNft();
  const [newData, setNewData] = useState([
    {
      name: "Attribute Name",
      heading: "Attribute Name",
      id: 1,
    },
    {
      name: "Attribute value",
      heading: "Attribute value",
      id: 2,
    },
  ]);
  const removeData = () => {};

  return (
    <>
      <form className={styles.container} onSubmit={formik.handleSubmit}>
        {loading ? (
          <div className={styles.loader}>
            <ColorRing
              visible={true}
              height='80'
              width='100'
              ariaLabel='blocks-loading'
              wrapperStyle={{}}
              wrapperClass='blocks-wrapper'
              colors={[
                "rgb(255, 183, 24)",
                "rgb(255, 183, 24)",
                "rgb(255, 183, 24)",
                "rgb(255, 183, 24)",
                "rgb(255, 183, 24)",
              ]}
            />
          </div>
        ) : (
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
                      {/* <p>Name</p> */}
                      <Input
                        type='text'
                        Name='name'
                        placeholder='Name'
                        style={{ height: "45px" }}
                        config={formik.getFieldProps("name")}
                      />
                      {formik.errors.name && formik.touched.name ? (
                        <div style={{ color: "#E5516B" }}>
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </div>
                    <div className={styles.inputwrapper}>
                      {/* <p>Symbol</p> */}
                      <Input
                        type='text'
                        Name='name'
                        style={{ height: "45px" }}
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
                    {/* <label>Description</label> */}
                    <div className={styles.InputWrapper}>
                      <textarea
                        rows={10}
                        className={styles.textArea}
                        placeholder='Description'
                        {...formik.getFieldProps("description")}
                      />
                      {formik.errors.description &&
                      formik.touched.description ? (
                        <div style={{ color: "#E5516B" }}>
                          {formik.errors.description}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* <div className={styles.advanceinfoWrapper}>
                    <label>Advanced Information</label>
                    <div className={styles.inputwrapper}>
                      <Input
                        type='text'
                        style={{ height: "45px" }}
                        Name='name'
                        placeholder='URL (External)'
                      />
                    </div>
                    <div className={styles.titleWrapper}>
                      <div className={styles.inputwrapper}>
                        <Input
                          style={{ height: "45px" }}
                          type='text'
                          Name='name'
                          placeholder='Collectible Group'
                        />
                      </div>

                      <div className={styles.inputwrapper}>
                        <Input
                          style={{ height: "45px" }}
                          type='text'
                          Name='name'
                          placeholder='Identifier Name'
                        />
                      </div>
                    </div>
                  </div> */}

                  <div className={styles.attributesWrapper}>
                    {/* <label>Attributes</label> */}
                    <div className={styles.inputs}>
                      {
                        // newData.map(item => (
                        //   <>
                        //     <div className={styles.inputwrapper} key={item.id}>
                        //       {/* <p>{item.heading}</p> */}
                        //       <Input
                        //         style={{ height: "45px" }}
                        //         type='text'
                        //         Name='name'
                        //         placeholder={item.name}
                        //       />
                        //     </div>
                        //   </>
                        // ))
                      }
                    </div>

                    {/* <div className={styles.btnWrapper}>
                      <div className={styles.btn}> */}
                    {/* {newData.length >= 12 ? (
                          " "
                        ) : (
                          <Button
                            Name='Add Attribute'
                            bgactive='transparent'
                            borderHover='2px solid #ffb718'
                            Coloractive='#ffb718'
                            Colorhover='#fff'
                            bghover='#ffb718'
                            height='45px'
                            lapheight='37px'
                            type='none'
                            onClick={() => {
                              setNewData([
                                ...newData,
                                {
                                  id: newData[newData.length - 1].id + 1,
                                  name: "Attribute Name",
                                  heading: "Attribute Name",
                                },
                                {
                                  id: newData[newData.length - 1].id + 1,
                                  name: "Attribute value",
                                  heading: "Attribute value",
                                },
                              ]);
                            }}
                          />
                        )} */}
                    {/* {newData.length >= 4 ? (
                          <Button
                            Name='Remove Attribute'
                            bgactive='transparent'
                            borderHover='2px solid #ffb718'
                            Coloractive='#ffb718'
                            Colorhover='#fff'
                            bghover='#ffb718'
                            height='47px'
                            lapheight='37px'
                            type='none'
                            onClick={() => removeData()}
                          />
                        ) : (
                          ""
                        )} */}
                    {/* </div>
                    </div> */}
                  </div>
                </div>

                <div className={styles.createbtn}>
                  <div className={styles.btnActive}>
                    <Button
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
        )}
      </form>
    </>
  );
};

export default CreateNFT;
