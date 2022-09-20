import * as yup from "yup";

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

export { YUP_CREATE_NFT_VALIDATION };
