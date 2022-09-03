import {render as _render} from "../../../../../node_modules/lit-html/lit-html.js";
import {bodyTemplate} from "./Templates/personTemplate.js";

export const render = (people, search) => {
    if (!search) {
        search = 'sjodfojsdoj gmnofsomomksoji30ji1098409313 sapksdpkakopsd';
    }
    _render(bodyTemplate(people, search), document.querySelector('tbody'));
};