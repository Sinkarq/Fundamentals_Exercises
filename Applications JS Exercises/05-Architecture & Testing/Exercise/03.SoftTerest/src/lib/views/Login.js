import {findElement, showHomePage} from "../DOM.js";
import {login} from "../API.js";
import {refreshNavigation} from "../Navigation.js";

const inputElements = {
    email: findElement('#loginPage #inputEmail'),
    password: findElement('#loginPage #inputPassword')
};

export const loginFunctionality = () => {
    findElement('#loginPage button').addEventListener('click', async (e) => {
        e.preventDefault();
        const inputData = getInputData();
        const response = await login(inputData.email, inputData.password);
        localStorage.setItem('accessToken', response.accessToken);

        refreshNavigation();
        showHomePage();
    });
};

const getInputData = () => {
    const email = inputElements.email.value;
    const password = inputElements.password.value;

    inputElements.password.value = '';
    inputElements.email.value = '';

    return {email, password};
};
