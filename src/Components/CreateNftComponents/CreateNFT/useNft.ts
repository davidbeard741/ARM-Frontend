import { useConnection } from "@solana/wallet-adapter-react";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useMetaplex } from "../../../hooks/useMetaplex";
import { createNFT } from "../../../services/metaplex.service";

const useNft = () => {
  const { metaplex } = useMetaplex();
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);

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
    attributeName: yup.string().required("required"),
    attributeValue: yup.string().required("required"),

    // paymentDetail: yup.array().of(
    //   yup.object().shape({
    //     label: yup
    //       .string()
    //       .trim("Cannot include leading and trailing spaces")
    //       .required("Label"),
    //     value: yup
    //       .string()
    //       .trim("Cannot include leading and trailing spaces")
    //       .required("Value is required"),
    //   })
    // ),
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
      attributeValue: "",
      attributeName: "",
    },
    onSubmit: async (values) => {
      console.log(values, "values");
      try {
        setLoading(true);
        toast.success("Creating NFT, please wait...");
        await createNFT({
          metaplex: metaplex!,
          metadata: {
            name: values.name,
            description: values.description,
            symbol: values.symbol,
            files: values.files,
          },
        });
        formik.resetForm();
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
  };
};

export default useNft;
