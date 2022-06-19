import {request} from "./request.js";
import {refreshButtonsState} from "./DOM.js";

refreshButtonsState();


const registerButton = document.querySelector('button');
const formEl = document.querySelector('form');

registerButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const formData = new FormData(formEl);

    const {email, password, rePass} = Object.fromEntries(formData);

    if (rePass != password) {
        alert("The password doesn't match.");
        return;
    }

    try {
        const data = await request('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        localStorage.setItem('userId', data._id);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('email', data.email);

        window.location.assign('index.html');
    } catch (exception) {
        alert(exception.message);
    }
});