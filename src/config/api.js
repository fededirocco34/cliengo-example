import { create } from 'apisauce';

import { API_BASE_URL } from '../constants/environment';


const api = create({
  baseURL: API_BASE_URL,
  timeout: 15000
});


export default api;
