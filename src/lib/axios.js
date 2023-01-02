import axios from "axios";
import { BASE_URL } from "../constants/global";

const axiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    responseType: "json",
  });
};

const API = axiosInstance()

export default API

