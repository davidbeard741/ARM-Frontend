import { useConnection } from "@solana/wallet-adapter-react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useMetaplex } from "../../../hooks/useMetaplex";
import { createNFT } from "../../../services/metaplex.service";

const useNft = () => {
  const { metaplex } = useMetaplex();
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newData, setNewData] = useState([
    {
      name: "AttributeName",
      placeholder: "attributeName",
      id: 1,
      value: "",
    },
    {
      name: "AttributeValue",
      placeholder: "attributeValue",
      id: 2,
      value: "",
    },
  ]);

  const handleChange = (event: any, id: number) => {
    const index = newData.findIndex((item) => item.id === id);
    let cloneArray = [...newData];
    cloneArray[index].value = event.target.value;
    setNewData(cloneArray);
  };

  const formikSchema = yup.object({
    name: yup
      .string()
      .required("* Name is required")
      .min(6, "Min 6 Characters")
      .max(40, "Characters cannot be above 40"),
    symbol: yup.string().required("* Symbol is required"),
    description: yup.string().required("* Description is required"),
    files: yup.mixed().required("* Choose a File"),
    url: yup.string().required("* URL is required"),
    collectible: yup.string().required("* Collectible Group is required"),
    identifiername: yup.string().required("* Identifier Name is required"),
  });

  const formik = useFormik({
    validationSchema: formikSchema,
    initialValues: {
      name: "",
      symbol: "",
      description: "",
      files: null,
      url: "",
      collectible: "",
      identifiername: "",
    },
    onSubmit: async (values, { resetForm }) => {
      let val = newData.find((item) => item.value);
      console.log("🚀 ~ file: useNft.ts ~ line 63 ~ onSubmit: ~ val", val);

      if (val === undefined) {
        toast.error("Attribute is required");
        return 0;
      }
      let metadata = {
        name: values.name,
        description: values.description,
        symbol: values.symbol,
        files: values.files,
        attribute: [...newData],
      };
      console.log("meta", metadata);
      try {
        setLoading(true);
        toast.success("Creating NFT, please wait...");
        await createNFT({
          metaplex: metaplex!,
          metadata: metadata,
        });
        resetForm();
        setLoading(false);
      } catch (error) {
        console.log("Error while creating error:", error);
        setLoading(false);
      }
    },
  });
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
