import client from "./client";

const endpoint = "/rpoducts";
const getProducts = () => client.get(endpoint);

export default {
  getProducts,
};
