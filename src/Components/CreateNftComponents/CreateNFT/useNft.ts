import { UploadMetadataInput } from "@metaplex-foundation/js";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMetaplex } from "../../../hooks/useMetaplex";
import { parsePhantomErrors } from "../../../services/error.service";
import { createNFT } from "../../../services/metaplex.service";
import { DYNAMIC_ATTRIBUTE_INITIAL_FORM } from "../../../utils/componentConstants";
import { YUP_CREATE_NFT_VALIDATION } from "../../../utils/validations";

console.log("Test:", DYNAMIC_ATTRIBUTE_INITIAL_FORM);
const attriIntials = DYNAMIC_ATTRIBUTE_INITIAL_FORM;

const useNft = () => {
  const { metaplex } = useMetaplex();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newData, setNewData] = useState(attriIntials);
  const handleChange = (
    event: any,
    selectedInputItem: any,
    fieldType: "trait_type" | "value"
  ) => {
    const index = newData.findIndex(item => item.id === selectedInputItem.id);
    let cloneArray = [...newData];
    cloneArray[index][fieldType] = event.target.value;
    setNewData(cloneArray);
  };

  const formik = useFormik({
    validationSchema: YUP_CREATE_NFT_VALIDATION,
    initialValues: {
      name: "",
      symbol: "",
      description: "",
      files: null,
      url: "",
      collectible: "",
      identifiername: "",
      royality: 10,
    },
    onSubmit: async values => {
      handleSubmitData(values);
    },
  });

  const validateDynamicAttributesForm = (attributesFields: any) => {
    for (let i = 0; i <= attributesFields.length; i++) {
      const element = attributesFields[i];
      if (element) {
        console.log(
          Boolean(element?.placeholder_value),
          Boolean(element?.value)
        );
        if (!(Boolean(element?.placeholder_value) && Boolean(element?.value))) {
          toast.error(
            `${element?.placeholder_value || ""} Attribute is required`
          );
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmitData = async (values: any) => {
    if (!validateDynamicAttributesForm(newData)) {
      return;
    }
    setNewData([
      {
        trait_type: "",
        placeholder_trait_type: "Trait Name",
        placeholder_value: "Trait Value",
        id: 0,
        value: "",
      },
    ]);
    // let attributes = newData.map((item: any) => ({
    //   trait_type: item.trait_type,
    //   value: item.value,
    // }));
    // let metadata: UploadMetadataInput = {
    //   name: values.name,
    //   description: values.description,
    //   symbol: values.symbol,
    //   files: values.files,
    //   external_url: values.url,
    //   attributes,
    //   seller_fee_basis_points: values.royality * 100,
    // };

    // try {
    //   setLoading(true);
    //   toast.success("Creating NFT, please wait...");
    //   await createNFT({
    //     metaplex: metaplex!,
    //     metadata: metadata,
    //   });
    //   formik.resetForm();
    //   setNewData(DYNAMIC_ATTRIBUTE_INITIAL_FORM);
    //   setLoading(false);
    // } catch (error: any) {
    //   toast.dismiss();
    //   console.log("Error while creating error:", error.message);
    //   toast.error(parsePhantomErrors(error.message), {});
    //   setLoading(false);
    // }
  };
  return {
    formik,
    loading,
    handleChange,
    newData,
    setNewData,
    error,
  };
};
export default useNft;
