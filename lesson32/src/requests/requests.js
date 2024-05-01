import BASE_URL from "./constants.js";
import axios from "axios";

export async function getAll(endpoint) {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function getOne(endpoint, id) {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function deleteOne(endpoint, id) {
    try {
        return await axios.delete(`${BASE_URL}${endpoint}/${id}`);
    } catch (error) {
        console.log(error.message);
    }
}