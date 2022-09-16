import {request} from "./request.js";
import {accessToken} from "../misc.js";

export const identityEndpoints = {
    register: async (email, password) =>
        await request('/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        }),

    login: async (email, password) =>
        await request('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        }),


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

    createFurniture: async (make, model, year, description, price, img, material) => {
        return await request('/data/catalog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken()
            },
            body: JSON.stringify({make, model, year, description, price, img, material})
        });
    },

    furnitureDetails: async (id) => await request(`/data/catalog/${id}`),

    updateFurniture: async (id, make, model, year, description, price, img, material) =>
        await request(`/data/catalog/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken()
            },
            body: JSON.stringify({make, model, year, description, price, img, material})
        }),

    deleteFurniture: async (id) => await request(`/data/catalog/${id}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": accessToken()
        }
    }),

    getUserFurniture: async (ownerId) => await request(`/data/catalog?where=_ownerId%3D%22${ownerId}%22`)
};
