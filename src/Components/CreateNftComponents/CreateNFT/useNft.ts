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
  const onClickCreate = async (e: any) => {
    await createNFT({
      metaplex: metaplex!,
      metadata: {
        name: "Test nft",
        description: "My description",
        symbol: "MYNFT",
        files: e.target.files,
      },
    });
  };
  const formikSchema = yup.object({
    name: yup.string().required("name required"),
    symbol: yup.string().required("symbol required"),
    description: yup.string().required("description required"),
    files: yup.mixed().required("File is required"),
  });
  const formik = useFormik({
    validationSchema: formikSchema,
    initialValues: {
      name: "",
      symbol: "",
      description: "",
      files: null,
    },
    onSubmit: async values => {
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
