import {render} from "../../../../../node_modules/lit-html/lit-html.js";
import {buttonTemplate} from "./Templates/buttonTemplate.js";
import {tableContainerTemplate} from "./Templates/tableContainerTemplate.js";
import {createTemplate} from "./Templates/createTemplate.js";
import {Endpoints} from "./API/Endpoints.js";
import {booksTemplate} from "./Templates/Books/booksTemplate.js";

render(buttonTemplate(), document.body);

export const update = async () => {
    const books = await Endpoints.getBooks();
    render([
            buttonTemplate(),
            tableContainerTemplate(),
            createTemplate()]
        , document.body);
    render(booksTemplate(books), document.querySelector('table'));
};