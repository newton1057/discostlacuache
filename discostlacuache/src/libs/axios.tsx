import axios from "axios";
//import { useAuthStore } from '../store/AuthStore';


const authAPI = axios.create({
    baseURL: "http://localhost:5000/v1/api",
    withCredentials: true
})

/*
authAPI.interceptors.request.use(config => {
    const token = useAuthStore.getState().token;
    config.headers = {
        Authorization: `Bearer ${token}`
    }
    return config
})*/

export default authAPI