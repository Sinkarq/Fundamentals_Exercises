import {getData} from "./API/Calls.js";
import {render} from "./render.js";
import {searchHandler} from "./Handlers/searchHandler.js";


const data = await getData();
export const people = [];
Object.keys(data).forEach(key => people.push(data[key]));

render(people);

document.querySelector('#searchBtn').addEventListener('click', searchHandler);