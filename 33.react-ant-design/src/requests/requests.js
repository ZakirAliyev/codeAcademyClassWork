import BASE_URL from "./constants.js";
import axios from "axios";

export async function getAll(endpoint) {
    try {
        return await axios.get(BASE_URL + endpoint);
    } catch (error) {
        return error;
    }
}

export async function getOne(endpoint, id) {
    try {
        return await axios.get(BASE_URL + endpoint + `/${id}`);
    } catch (error) {
        return error;
    }
}

export async function deleteOne(endpoint, id) {
    try {
        return await axios.delete(BASE_URL + endpoint + `/${id}`);
    } catch (error) {
        return error;
    }
}

export async function post(endpoint, payload) {
    try {
        return await axios.post(BASE_URL + endpoint, payload);
    } catch (error) {
        return error;
    }
}

export async function putOne(endpoint, id, payload) {
    try {
        return await axios.put(BASE_URL + endpoint + `/${id}`, payload);
    } catch (error) {
        return error;
    }
}

export async function patchOne(endpoint, id, payload) {
    try {
        return await axios.patch(BASE_URL + endpoint + `/${id}`, payload);
    } catch (error) {
        return error;
    }
}