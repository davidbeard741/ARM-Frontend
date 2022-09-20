import * as yup from "yup";
import { toast } from "react-toastify";

const YUP_CREATE_NFT_VALIDATION = yup.object({
  name: yup
    .string()
    .required("* Name is required")
    .min(6, "Min 6 Characters")
    .max(40, "Characters cannot be above 40"),
  symbol: yup.string().required("* Symbol is required"),
  description: yup.string().required("* Description is required"),
  files: yup.mixed().required("* Choose a File"),
  url: yup.string(),
  collectible: yup.string(),
  identifiername: yup.string(),
  royality: yup.number(),
});

const validateDynamicAttributesForm = (attributesFields: any) => {
  for (let i = 0; i <= attributesFields.length; i++) {
    const element = attributesFields[i];
    if (element) {
      console.log(Boolean(element?.placeholder_value), Boolean(element?.value));
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

export { YUP_CREATE_NFT_VALIDATION, validateDynamicAttributesForm };
