import {html, render} from "../../../../../../../node_modules/lit-html/lit-html.js";
import {editTemplate} from "../editTemplate.js";
import {update} from "../../app.js";
import {Endpoints} from "../../API/Endpoints.js";

export const booksTemplate = (books) => html`
    <thead>
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
    ${books.map(book => bookTemplate(book))}
    </tbody>
`;

const bookTemplate = (book) => html`
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button @click="${() => showEdit(book.id, book.title, book.author)}">Edit</button>
            <button @click="${() => deleteHandler(book.id)}">Delete</button>
        </td>
    </tr>`;

const showEdit = (id, title, author) => {
    document.querySelector('#add-form').remove();
    render(editTemplate(id, title, author), document.body);
};

const deleteHandler = async (id) => {
    await Endpoints.deleteBook(id)
    await update();
};