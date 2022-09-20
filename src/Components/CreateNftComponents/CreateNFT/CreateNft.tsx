import { FC } from "react";
import { IoMdImages } from "react-icons/io";
import { ColorRing } from "react-loader-spinner";
import { Button } from "../../_common/Button/Button";
import Input from "../../_common/Input/input";
import ProgressBar from "../../_common/progressBar";
import styles from "./nft.module.scss";
import useNft from "./useNft";

const CreateNFT: FC = () => {
  const { formik, loading, handleChange, newData, setNewData, error } =
    useNft();

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

                  <div className={styles.advanceinfoWrapper}>
                    <label>Advanced Information</label>
                    <div className={styles.inputProgressWrapper}>
                      {/* <p>URL (External)</p> */}
                      <div className={styles.inputCom}>
                        <Input
                          type='text'
                          style={{ height: "45px" }}
                          Name='url'
                          placeholder='URL (External)'
                          config={formik.getFieldProps("url")}
                        />
                      </div>
                      <div className={styles.progComp}>
                        {" "}
                        <ProgressBar
                          sliderText='Royality'
                          value={formik.values.royality}
                          onChange={(val: number) => {
                            formik.setFieldValue("royality", val);
                          }}
                          min={0}
                          max={50}
                        />
                      </div>
                    </div>
                    {/* <div className={styles.titleWrapper}>
                      <div className={styles.inputwrapper}>
                        <Input
                          style={{ height: "45px" }}
                          type="text"
                          Name="collectible"
                          placeholder="Collectible Group"
                          config={formik.getFieldProps("collectible")}
                        />
                        {formik.errors.collectible &&
                        formik.touched.collectible ? (
                          <div style={{ color: "#E5516B" }}>
                            {formik.errors.collectible}
                          </div>
                        ) : null}
                      </div> 

                      <div className={styles.inputwrapper}>
                        <Input
                          style={{ height: "45px" }}
                          type="text"
                          Name="name"
                          placeholder="Identifier Name"
                          config={formik.getFieldProps("identifiername")}
                        />
                        {formik.errors.identifiername &&
                        formik.touched.identifiername ? (
                          <div style={{ color: "#E5516B" }}>
                            {formik.errors.identifiername}
                          </div>
                        ) : null}
                      </div>
                    </div> */}
                  </div>

                  <div className={styles.attributesWrapper}>
                    <label>Attributes</label>
                    <div className={styles.inputs}>
                      {newData.map((item, index) => (
                        <div key={item.id}>
                          <div className={styles.inputwrapper}>
                            <Input
                              style={{ height: "45px" }}
                              type='text'
                              value={item.trait_type}
                              placeholder={item.placeholder_trait_type}
                              onChange={(event: any) => {
                                //1st priority
                                handleChange(event, item, "trait_type");
                              }}
                            />
                          </div>
                          <div className={styles.inputwrapper}>
                            <Input
                              style={{ height: "45px" }}
                              type='text'
                              value={item.value}
                              placeholder={item.placeholder_value}
                              onChange={(event: any) => {
                                //1st priority
                                handleChange(event, item, "value");
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className={styles.btnWrapper}>
                      <div className={styles.btn}>
                        {newData.length >= 12 ? (
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
                            type='button'
                            onClick={() => {
                              setNewData([
                                ...newData,
                                {
                                  trait_type: "",
                                  placeholder_trait_type: "Trait Name",
                                  placeholder_value: "Trait Value",
                                  id: newData.length,
                                  value: "",
                                },
                              ]);
                            }}
                          />
                        )}
                        {newData.length > 1 ? (
                          <Button
                            Name='Remove Attribute'
                            bgactive='transparent'
                            borderHover='2px solid #ffb718'
                            Coloractive='#ffb718'
                            Colorhover='#fff'
                            bghover='#ffb718'
                            height='47px'
                            lapheight='37px'
                            type='button'
                            onClick={() =>
                              setNewData([...newData.slice(0, -1)])
                            }
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
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
