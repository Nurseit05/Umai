import axios from 'axios';

export const clientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Accept-Language": "ru",
  },
  timeout: 15000,
});

function setResponseInterceptors() {
  clientApi.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
      return Promise.reject(error);
    }
  );
}

setResponseInterceptors();