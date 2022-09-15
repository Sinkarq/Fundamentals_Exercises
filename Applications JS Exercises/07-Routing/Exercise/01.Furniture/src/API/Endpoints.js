import {request} from "./request.js";
import {accessToken} from "../misc.js";

const createOptions = (method, body, _accessToken = null) => {
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    };

    if (_accessToken) {
        options.headers['X-Authorization'] = _accessToken;
    }
};

export const identityEndpoints = {
    register: async (email, password) =>
        await request('/users/register', createOptions('POST', {email, password})),

    login: async (email, password) =>
        await request('/users/login', createOptions('POST', {email, password})),


    logout: async () => {
        await request('/users/logout', {
            method: "GET",
            headers: {
                "X-Authorization": accessToken()
            }
        });
    },
};

export const Endpoints = {
    getFurnitures: async () => await request('/data/catalog'),

    createFurniture: async (make, model, year, description, price, img, material) =>
        await request('/data/catalog', createOptions('POST'), {
            make,
            model,
            year,
            description,
            price,
            img,
            material
        }, accessToken()),

    furnitureDetails: async (id) => await request(`/data/catalog/${id}`),

    updateFurniture: async (id, make, model, year, description, price, img, material) =>
        await request(`/data/catalog/${id}`, createOptions('PUT', {
            make,
            model,
            year,
            description,
            price,
            img,
            material
        }, accessToken())),

    deleteFurniture: async (id) => await request(`/data/catalog/${id}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": accessToken()
        }
    }),

    getUserFurniture: async (ownerId) => await request(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${ownerId}%22`)
};
