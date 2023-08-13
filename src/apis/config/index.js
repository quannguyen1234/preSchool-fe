import axios from "axios";
import {
  getLocalToken,
  setLocalToken,
  clearToken
} from "@/helpers";
import { API_URL } from "@/constants";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use((res) => {
  let token = getLocalToken();
  if (token) {
    console.log("token: ", token);
    res.headers.Authorization = "Bearer " + token;
  }
  return res;
});

instance.setToken = (token) => {
  instance.defaults.headers["Authorization"] = "Bearer " + token;
  setLocalToken(token);
};


instance.interceptors.response.use(
  (res) => {
    if (res.status === 401) {
        clearToken();
        this.$router.push({ name: "Login" });
      }
    return res;
  },
  (err) => {
    if (err.status === 401) {
      clearToken();
      this.$router.push({ name: "Login" });
    }
  }
);

export default instance;