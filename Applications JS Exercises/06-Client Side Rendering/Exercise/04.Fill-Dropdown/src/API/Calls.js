import {request} from "./request.js";

export const getData = async () => await request('/jsonstore/advanced/dropdown');

export const postOption = async (text) => await request('/jsonstore/advanced/dropdown', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({text})
});