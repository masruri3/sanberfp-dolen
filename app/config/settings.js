import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrls: "https://fakestoreapi.com/",
  },
  staging: {
    apiUrls: "https://fakestoreapi.com/",
  },
  prod: {
    apiUrls: "https://fakestoreapi.com/",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
