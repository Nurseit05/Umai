import axios from 'axios';

export const clientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

function setResponseInterceptors() {
  clientApi.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
      const response = error?.response;
      const method = response?.config?.method;

      if (['get'].includes(method)) {
      
      }

      return Promise.reject(error);
    }
  );
}

setResponseInterceptors();