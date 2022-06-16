const listOfPhones = document.querySelector('#phonebook');
const loadButton = document.querySelector('#btnLoad');
const createButton = document.querySelector('#btnCreate');

getPhones();

createButton.addEventListener('click', () => {
    const personEl = document.querySelector('#person');
    const phoneEl = document.querySelector('#phone');

    let person = personEl.value;
    let phone = phoneEl.value;

    request('http://localhost:3030/jsonstore/phonebook/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({person, phone})
    });

    personEl.value = '';
    phoneEl.value = '';
})

loadButton.addEventListener('click', (e) => {
    listOfPhones.innerHTML = '';
    getPhones();
})

function getPhones() {

    request('http://localhost:3030/jsonstore/phonebook/')
        .then(x => Object.values(x).forEach(entity => {
            createPhoneEl(entity._id, entity.person, entity.phone)
        }))

    function createPhoneEl(id, name, number) {
        const liEl = document.createElement('li');

        liEl.id = id;
        liEl.textContent = `${name}: ${number}`;

        const buttonEl = document.createElement('button');
        buttonEl.textContent = 'Delete';
        liEl.appendChild(buttonEl);

        buttonEl.addEventListener('click', (e) => {
            request(`http://localhost:3030/jsonstore/phonebook/${liEl.id}`, {
                method: "DELETE"
            });

            listOfPhones.removeChild(liEl);
        })

        listOfPhones.appendChild(liEl);
    }
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