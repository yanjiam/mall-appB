import axios from 'axios';
import store from './store';

const instance = axios.create({
  baseURL: 'http://localhost:9527',
});
instance.interceptors.request.use((config) => {
  if (config.url.includes('/login')
    || config.url.includes('/user')
    || config.url.includes('/business')) {
    return config;
  }
  return {
    ...config,
    params: {
      ...config.params,
    },
    data: {
      ...config.data,
      pin: store.state.business.pin,
    },
  };
}, (error) => Promise.reject(error));

// instance.interceptors.response.use((response) => {
//   console.log(response.data.state);
//   if (response.data.state !== 0) {
//     console.log(response.data.msg);
//     return response.data.msg;
//   }
//   return response;
// }, (error) => Promise.reject(error));

export default instance;
