import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*",
  },
});
export default axiosClient;

