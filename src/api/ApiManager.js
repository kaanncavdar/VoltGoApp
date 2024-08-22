import axios from "axios";
const ApiManager = axios.create({
  baseURL: "http://147.182.221.195:3000",
  responseType: "json",
  withCredentials: true
});
export default ApiManager;
