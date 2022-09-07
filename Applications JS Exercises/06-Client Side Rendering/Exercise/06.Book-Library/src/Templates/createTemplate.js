import {html} from "../../../../../../node_modules/lit-html/lit-html.js";
import {Endpoints} from "../API/Endpoints.js";
import {update} from "../app.js";

export const createTemplate = () => html`
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input @click="${async (e) => await onClick(e)}" type="submit" value="Submit">
    </form>
`;

const onClick = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget.parentNode);
    const {title, author} = Object.fromEntries(formData);
    await Endpoints.createBook(title, author);
    await update();
};