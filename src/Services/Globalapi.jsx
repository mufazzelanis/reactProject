import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const getProducts = () => axios.get(BASE_URL + "/products");

export default {
  getProducts
};