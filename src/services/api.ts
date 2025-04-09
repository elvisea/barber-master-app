import axios from "axios";

import { ErrorCode } from "@/enums";
import { AppError } from "@/errors/AppError";

// const API_URL = "https://barber-master.bytefulcode.tech";
const API_URL = "http://192.168.1.9:3333";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response) {

      throw new AppError(
        error.response.data.errorCode,
        error.response.data.statusCode,
        error.response.data.error,
        error.response.data.message);
    } else {
      throw new AppError(
        ErrorCode.UNKNOWN_ERROR,
        500,
        error.response.data.error,
        error.response.data.message
      );
    }
  },
);

export default api;
