import axios from 'axios';
import { getCookie } from './cookie';
const baseURL = import.meta.env.VITE_API_BASE_URL;
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      // const currentUser = await getCurrentUser();
      // const { firebaseToken } = currentUser;
      // if (firebaseToken) {
      //   config.headers.Authorization = `Bearer ${firebaseToken}`;
      // }
      config.headers.Authorization = `Bearer ${getCookie('token')}`;
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Error response:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
