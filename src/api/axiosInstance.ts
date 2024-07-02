import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    Authorization: "Basic dGVzdEB0ZXN0LnRlc3Q6MTIzMzIx",
  },
});