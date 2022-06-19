const tBody = document.querySelector('tbody');
const submitButtonEl = document.querySelector('#submit');
const formEl = document.querySelector('form');

getData();

submitButtonEl.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(formEl);
    const {firstName, lastName, facultyNumber, grade} = Object.fromEntries(formData);

    request('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({firstName, lastName, facultyNumber, grade})
    })
        .then(_ => getData())
        .catch(error => console.error(error.message));
});

function getData() {
    request('http://localhost:3030/jsonstore/collections/students')
        .then(data => {
            tBody.innerHTML = '';
            const students = Object.values(data);
            students.forEach(student => createTr(tBody, student.firstName, student.lastName, student.facultyNumber, student.grade));
        })
        .catch(error => console.error(error.message));
}

function createTr(tBodyEl, firstName, lastName, facultyNumber, grade) {
    const tr = document.createElement('tr');

    const firstNameTd = document.createElement('td');
    const lastNameTd = document.createElement('td');
    const facultyNumberTd = document.createElement('td');
    const gradeTd = document.createElement('td');

    firstNameTd.textContent = firstName;
    lastNameTd.textContent = lastName;
    facultyNumberTd.textContent = facultyNumber;
    gradeTd.textContent = grade;

    tr.appendChild(firstNameTd);
    tr.appendChild(lastNameTd);
    tr.appendChild(facultyNumberTd);
    tr.appendChild(gradeTd);

    tBodyEl.appendChild(tr);
}

function request(url, options) {
    return fetch(url, options)
        .then(response => {
            if (response.status != 200) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .catch(x => console.error(x.message));
}

async function request(url, options) {
    try {
        const response = await fetch(`${host}:${port}${url}`, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status == 204 ? response : await response.json();

    } catch (error) {
        throw error;
    }
}