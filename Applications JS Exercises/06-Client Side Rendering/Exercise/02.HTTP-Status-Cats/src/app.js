import {cats} from "./data/catSeeder.js";
import {render} from "../../../../../node_modules/lit-html/lit-html.js";
import {catsListTemplate} from "./templates/catsListTemplate.js";


render(catsListTemplate(cats), document.querySelector('#allCats'));