import {render} from "../../../../../node_modules/lit-html/lit-html.js";
import {townListTemplate} from "../../01.List-Towns/templates/townListTemplate.js";
import {towns} from "./data/towns.js";

render(townListTemplate(towns), document.querySelector('#towns'));

document.querySelector('button').addEventListener('click', () => {
    const inputEl = document.querySelector('input');

    document.querySelectorAll('li').forEach(town => {
        if (town.textContent == inputEl.value) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
        } else {
            town.style.textDecoration = '';
            town.style.fontWeight = '';
        }
    });
});