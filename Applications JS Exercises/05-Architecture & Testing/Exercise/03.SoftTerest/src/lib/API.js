import {accessToken} from "./misc.js";

const host = 'http://localhost';
const port = 3030;

const request = async (url, options) => {
    try {
        const response = await fetch(`${host}:${port}${url}`, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status == 204 ? response : await response.json();

    } catch (error) {
        throw error;
    }
};

const GET = async (url, accessToken) => {
    if (accessToken) {
        return await request(url, {
            headers: {
                'X-Authorization': accessToken
            }
        });
    }
    return await request(url);
};

const POST = async (url, accessToken, body) => {
    let headers = {
        'content-type': 'application/json'
    };

    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }

    return await request(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    });
};

const PUT = async (url, accessToken, body) => {
    let headers = {
        'content-type': 'application/json'
    };

    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }

    return await request(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    });
};

export const login = async (email, password) =>
    POST('/users/login', null, {
        email,
        password
    });

export const register = async (email, password) =>
    POST('/users/register', null, {
        email,
        password
    });

export const logout = async () => {
    await GET('/users/logout', accessToken());
};

export const getIdeas = async () =>
    await GET('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc', accessToken());

export const createIdea = async (title, description, image) =>
    await POST('/data/ideas', accessToken(), {title, description, image});