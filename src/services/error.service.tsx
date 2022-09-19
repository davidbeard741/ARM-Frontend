export const parsePhantomErrors = (errorMessage: string): string => {
  if (errorMessage.includes("User rejected the request.")) {
    return "User rejected the request.";
  } else {
    return "";
  }
};
