import axios from 'axios';

export const clientApi = axios.create({
  baseURL: 'http://195.38.166.135:8000/api/',
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