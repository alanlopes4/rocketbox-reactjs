import axios from "axios";

const api = axios.create({
  baseURL: "https://alan-omnistack-backend.herokuapp.com"
});

export default api;
