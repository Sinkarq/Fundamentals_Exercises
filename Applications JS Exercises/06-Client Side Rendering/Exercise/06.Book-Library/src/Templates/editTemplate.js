import {html} from "../../../../../../node_modules/lit-html/lit-html.js";
import {Endpoints} from "../API/Endpoints.js";
import {update} from "../app.js";

export const editTemplate = (id, title, author) => html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input value="${title}" type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input value="${author}" type="text" name="author" placeholder="Author...">
        <input @click="${async (e) => await onClick(e, id)}" type="submit" value="Save">
    </form>
`;

const onClick = async (e, id) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget.parentNode);
    const {title, author} = Object.fromEntries(formData);

    await Endpoints.updateBook(id, title, author);
    await update();
};