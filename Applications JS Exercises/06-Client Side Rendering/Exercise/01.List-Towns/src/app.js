import {render} from "../../../../../node_modules/lit-html/lit-html.js";
import {getInput} from "../lib/misc.js";
import {townListTemplate} from "../templates/townListTemplate.js";

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const input = getInput(document.querySelector('form'), 'towns');
    const towns = input.split(', ');
    render(townListTemplate(towns), document.querySelector('#root'));
});