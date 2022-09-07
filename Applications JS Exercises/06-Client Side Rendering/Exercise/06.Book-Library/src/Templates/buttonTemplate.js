import {html} from "../../../../../../node_modules/lit-html/lit-html.js";
import {update} from "../app.js";

export const buttonTemplate = () => html`
    <button id="loadBooks" @click="${async (e) => await onClick(e)}">LOAD ALL BOOKS</button>
`;

export const onClick = async (e) => {
    e.preventDefault();
    await update();
};