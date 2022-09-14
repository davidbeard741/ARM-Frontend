import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";

const useNft = () => {
  const formikSchema = yup.object({
    name: yup.string().required("name required"),
    symbol: yup.string().required("symbol required"),
    description: yup.string().required("description required"),
  });
  const formik = useFormik({
    validationSchema: formikSchema,
    initialValues: {
      name: "",
      symbol: "",
      description: "",
    },
    onSubmit: (values) => {
      toast.success("sadjask");
      console.log("🚀 ~ file: CreateNft.tsx ~ line 19 ~ values", values);
    },
  });
  return {
    formik,
  };
};

export default useNft;
