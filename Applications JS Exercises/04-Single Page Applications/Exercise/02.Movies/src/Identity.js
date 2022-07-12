import {request} from "./request.js";
import {renderMovies} from "./router.js";
import {refreshVisibilityNavBar} from "./DOM.js";

loginFunctionality();
registerFunctionality();

function loginFunctionality() {
    document.querySelector('#form-login button').addEventListener('click', async (e) => {
        e.preventDefault();


        const loginForm = document.querySelector('#form-login form');

        const formData = new FormData(loginForm);
        const {email, password} = Object.fromEntries(formData);

        const res = await request('/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        if (res.status == 403) {
            alert('Wrong credentials');
            return;
        }

        localStorage.setItem('_id', res._id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('accessToken', res.accessToken);

        await renderMovies();
        refreshVisibilityNavBar();
    });
}

function registerFunctionality() {
    document.querySelector('#form-sign-up button').addEventListener('click', async (e) => {
        e.preventDefault();


        const signupForm = document.querySelector('#form-sign-up form');

        const formData = new FormData(signupForm);
        const {email, password, repeatPassword} = Object.fromEntries(formData);


        if (password != repeatPassword) {
            alert(`Passwords don't match.`);
            return;
        }

        const res = await request('/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        localStorage.setItem('_id', res._id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('accessToken', res.accessToken);

        await renderMovies();
        refreshVisibilityNavBar();
    });
}

export const isLogged = () => {
    if (!localStorage.getItem('accessToken')) {
        return false;
    }

    return true;
};