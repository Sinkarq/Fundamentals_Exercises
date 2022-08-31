import {html} from "../../../../../../node_modules/lit-html/lit-html.js";
import {catTemplate} from "./catTemplate.js";

export const catsListTemplate = (cats) => html`
    <ul>${cats.map(cat => catTemplate(cat))}</ul>`;