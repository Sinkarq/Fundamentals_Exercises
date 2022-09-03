import {throwException} from "../throwException.js";
import {render} from "../render.js";
import {people} from "../solution.js";

export const searchHandler = (e) => {
    e.preventDefault();

    console.log(1);

    const searchField = document.querySelector('#searchField');

    const value = searchField.value;

    validateInput(value);

    clearInput(searchField);

    render(people, value);
};

const validateInput = value => {
    if (!value) {
        throwException('Invalid input');
    }
};

const clearInput = el => el.value = '';