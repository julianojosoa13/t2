import axios from "axios";
import { store } from "../data/store";

axios.interceptors.request.use(async config => {
    config.headers['X-Device-Id'] = config.headers['X-Device-Id'] || store?.getState().config.deviceId
    config.headers['Authorization'] = `Bearer ${store?.getState().auth.accessToken}`
    return config;
}, error => {
    return Promise.reject(error);
});

export const API_URL="http://192.168.100.4:3333"
export const API_BASE=API_URL+"/api"
