import axios from 'axios';
import {API_URL, API_KEY} from '../config/default';
const api = axios.create({
  baseURL: API_URL,
});

/* Not Authorization
api.interceptors.request.use(config => {
  const headers = { ...config.headers };
  if (API_KEY) {
    headers.Authorization = `Bearer ${API_KEY}`;
    headers.Content - Type = 'application/json;charset=utf-8';
    console.log(headers);
  }
  return { ...config, headers };
});
*/

export default api;
