import {html} from "../../../../../../node_modules/lit-html/lit-html.js";
import {townTemplate} from "./townTemplate.js";

export const townsListTemplate = (towns) => html`<ul>${towns.map(town => townTemplate(town))}</ul>`;