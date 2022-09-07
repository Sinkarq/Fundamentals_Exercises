import {request} from "./request.js";

const getBooks = async () => {
    const results = [];
    const books = await request('/jsonstore/collections/books');
    Object.keys(books).forEach(key => results.push({
        id: key,
        title: books[key].title,
        author: books[key].author
    }));
    return results;
};

const deleteBook = async (id) =>
    await request(`/jsonstore/collections/books/${id}`, {method: 'DELETE'});

const createBook = async (title, author) =>
    await request('/jsonstore/collections/books/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, author})
    });

const updateBook = async function (id, title, author) {
    await request(`/jsonstore/collections/books/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, author})
    });
};

export const Endpoints = {
    getBooks,
    deleteBook,
    updateBook,
    createBook
};