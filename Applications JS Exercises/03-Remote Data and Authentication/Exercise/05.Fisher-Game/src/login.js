import {request} from "./request.js";
import {refreshButtonsState} from "./DOM.js";

refreshButtonsState();

const button = document.querySelector('button');
const form = document.querySelector('form');

button.addEventListener('click', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const {email, password} = Object.fromEntries(formData);


    if (email == '' || password == '') {
        alert("Something's missing");
        return;
    }

    let data;

    data = await request('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    if (data.status == 403) {
        alert('Wrong login credentials.');
        return;
    }

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('userId', data._id);
    localStorage.setItem('email', data.email);
    window.location.assign('index.html');
});