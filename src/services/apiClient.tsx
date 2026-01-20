import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

class APiClient<T> {
  get = (url: string, config?: AxiosRequestConfig) => {
    return axiosInstance.get<T[]>(url, config).then((res) => res.data);
  };
}

export default APiClient;
