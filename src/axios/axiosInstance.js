import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://linkedin-clone-backend-qapn.onrender.com",

  timeout: 150000,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

  // Required for sending cookies with cross-origin requests
  withCredentials: true,
});

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {
    const status = error.response?.status;

    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";

    if (status === 401) {
      console.log("401 Unauthorized:", message);
    } else if (status === 403) {
      console.log("403 Forbidden:", message);
    } else if (status === 404) {
      console.log("404 Not Found:", message);
    } else if (status === 500) {
      console.log("500 Server Error:", message);
    } else if (error.request) {
      console.log("Network Error: No response received from server.");
    }

    return Promise.reject({
      message,
      status: status || 500,
    });
  }
);

export default axiosInstance;