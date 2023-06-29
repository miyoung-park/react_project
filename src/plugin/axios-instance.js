import axios from "axios";


const createAxiosInstance = () => {
    const defaultAxiosOption = {
        baseURL: "http://localhost:9092/",
        timeout: 30000,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
        },
    };


    return axios.create(defaultAxiosOption);
}

export default createAxiosInstance;