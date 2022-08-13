import {findElement, showHomePage} from "../DOM.js";
import {newException} from "../misc.js";
import {createIdea} from "../API.js";

const inputElements = {
    title: findElement('#createPage #title'),
    description: findElement('#createPage #description'),
    image: findElement('#createPage #imageURl')
};

export const createIdeaFunctionality = () => {
    findElement('#createPage .btn').addEventListener('click', async (e) => {
        e.preventDefault();

        const inputs = getInputs();
        await createIdea(inputs.title, inputs.description, inputs.image);
        clearInputs();
        showHomePage();
    });
};

const getInputs = () => {
    const title = inputElements.title.value;
    const description = inputElements.description.value;
    const image = inputElements.image.value;

    if (title.length < 6) {
        newException('The title should be at least 6 characters long.');
    } else if (description.length < 10) {
        newException('The description should be at least 10 characters long.');
    } else if (image.length < 5) {
        newException('The image should be at least 5 characters long.');
    }

    return {title, description, image};
};

const clearInputs = () => {
    inputElements.title.value = '';
    inputElements.description.value = '';
    inputElements.image.value = '';
};