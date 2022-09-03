import {render} from "../../../../../node_modules/lit-html/lit-html.js";
import {optionTemplate} from "./Templates/optionTemplate.js";
import {getOptions} from "./Misc.js";

export const renderOptions = async () => {
    render(optionTemplate(await getOptions()), document.querySelector('#menu'));
};