import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import store from "../store/store"; // Import the Redux store to access the auth state

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

class ApiService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL, // Your API base URL
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Add a request interceptor to include the auth token
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const state = store.getState();
        const token = state.auth?.user?.idToken?.jwtToken;
        
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // Generic GET method
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(BASE_URL+url, config);
  }

  // Generic POST method
  post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(BASE_URL+url, data, config);
  }

  // Generic PUT method
  put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(BASE_URL+url, data, config);
  }

  // Generic DELETE method
  delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(BASE_URL+url, config);
  }
}

export default new ApiService();
