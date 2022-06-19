import {request} from "./request.js";
import {IsLoggedIn} from "./Identity.js";

export function createInput(div, labelText, _class, value) {
    const label = document.createElement('label');
    label.textContent = labelText;

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.classList.add(_class);
    inputEl.value = value;

    div.append(label, inputEl);
}

export function refreshButtonsState() {
    if (!IsLoggedIn()) {
        navBarActions().loggedOut();
    } else {
        navBarActions().logged();
    }
}

export function addLogoutFunctionality() {
    const logoutButton = document.querySelector('#logout');
    const accessToken = localStorage.getItem('accessToken');

    logoutButton.addEventListener('click', async () => {
        const response = await request('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: {
                'X-Authorization': accessToken
            }
        });
        if (response.status == 204) {
            localStorage.clear();
            navBarActions().loggedOut();
        }
    });
}

function navBarActions() {
    const loginButton = document.querySelector('#login');
    const registerButton = document.querySelector('#register');
    const logoutButton = document.querySelector('#logout');

    function logged() {
        if (window.location.href.includes('index.html')) {
            const button = document.querySelector('button.add');
            button.removeAttribute('disabled');
        }
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
        logoutButton.style.display = 'inline';

        const emailEl = document.querySelector('p.email span');
        const email = localStorage.getItem('email');
        emailEl.textContent = email;
    }

    function loggedOut() {
        if (window.location.href.includes('index.html')) {
            [
                ...document.querySelectorAll('button.add'),
                ...document.querySelectorAll('button.delete'),
                ...document.querySelectorAll('button.update')]
                .forEach(button => {
                    button.setAttribute('disabled', '');
                });
        }
        loginButton.style.display = 'inline';
        registerButton.style.display = 'inline';
        logoutButton.style.display = 'none';

    }

    return {logged, loggedOut};
}