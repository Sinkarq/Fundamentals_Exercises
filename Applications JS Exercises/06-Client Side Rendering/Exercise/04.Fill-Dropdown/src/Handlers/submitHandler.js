import {throwException} from "../throwException.js";
import {postOption} from "../API/Calls.js";
import {renderOptions} from "../rendering.js";

export const submitHandler = async (e) => {
    e.preventDefault();

    const inputEl = document.querySelector('#itemText');

    validateInput(inputEl);

    await postOption(inputEl.value);

    clearInput(inputEl);

    await renderOptions();
};

const clearInput = (el) => el.value = '';

const validateInput = (el) => {
    if (!el.value) {
        throwException('Invalid input');
    }
};

