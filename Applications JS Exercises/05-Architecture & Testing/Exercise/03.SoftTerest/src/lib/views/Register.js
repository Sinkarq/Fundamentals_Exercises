import {findElement, showHomePage} from "../DOM.js";
import {register} from "../API.js";
import {newException} from "../misc.js";
import {refreshNavigation} from "../Navigation.js";

const inputElements = {
    email: findElement('#registerPage #inputEmail'),
    password: findElement('#registerPage #inputPassword'),
    repeatPassword: findElement('#registerPage #inputRepeatPassword')
};

export const registerFunctionality = () => {
    findElement('#registerPage button').addEventListener('click', async (e) => {
        e.preventDefault();
        const inputData = getInputData();
        const response = await register(inputData.email, inputData.password);
        localStorage.setItem('accessToken', response.accessToken);

        refreshNavigation();
        showHomePage();
    });
};

const getInputData = () => {
    const email = inputElements.email.value;
    const password = inputElements.password.value;
    const repeatPassword = inputElements.repeatPassword.value;

    if (email.length < 3 || !email.includes('@')) {
        const message = 'Invalid email';
        newException(message);
    }

    if (password.length < 3) {
        const message = 'Invalid password';
        newException(message);
    }

    if (repeatPassword != password) {
        const message = "Passwords don't match";
        newException(message);
    }

    inputElements.password.value = '';
    inputElements.email.value = '';
    inputElements.repeatPassword.value = '';

    return {email, password};
};


function hasNumber(myString) {
    return /\d/.test(myString);
}