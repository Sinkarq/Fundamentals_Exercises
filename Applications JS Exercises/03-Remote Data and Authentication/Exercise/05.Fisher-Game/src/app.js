import {addLogoutFunctionality, refreshButtonsState, createInput} from "./DOM.js";
import {request} from "./request.js";

addLogoutFunctionality();
refreshButtonsState();
await loadCatches();

document.querySelector('button.load').addEventListener('click', async () => {
    await loadCatches();
});
document.querySelector('button.add').addEventListener('click', async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem('accessToken');
    const formEl = document.querySelector('#addForm');
    const formData = new FormData(formEl);
    const {angler, weight, species, location, bait, captureTime} = Object.fromEntries(formData);

    await request('http://localhost:3030/data/catches', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({angler, weight, species, location, bait, captureTime})
    });

    document.location.reload();
});


async function loadCatches() {
    const userId = localStorage.getItem('userId');
    const catchesEl = document.querySelector('#catches');
    const accessToken = localStorage.getItem('accessToken');

    catchesEl.innerHTML = '';

    Object.values(await request('http://localhost:3030/data/catches'))
        .forEach(_catch => {
            const catchDiv = document.createElement('div');
            catchDiv.classList.add('catch');

            createInput(catchDiv, 'Angler', 'angler', _catch.angler);
            createInput(catchDiv, 'Weight', 'weight', _catch.weight);
            createInput(catchDiv, 'Species', 'species', _catch.species);
            createInput(catchDiv, 'Location', 'location', _catch.location);
            createInput(catchDiv, 'Bait', 'bait', _catch.bait);
            createInput(catchDiv, 'Capture Time', 'captureTime', _catch.captureTime);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.setAttribute('data-id', _catch._id);
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', async (e) => {
                e.preventDefault();
                await request(`http://localhost:3030/data/catches/${_catch._id}`, {
                    method: "DELETE",
                    headers: {
                        'X-Authorization': accessToken
                    }
                });

                document.location.reload();
            });

            const updateButton = document.createElement('button');
            updateButton.classList.add('update');
            updateButton.setAttribute('data-id', _catch._id);
            updateButton.textContent = 'Update';
            updateButton.addEventListener('click', async (e) => {
                e.preventDefault();

                const accessToken = localStorage.getItem('accessToken');

                const angler = catchDiv.querySelector('input.angler').value;
                const weight = catchDiv.querySelector('input.weight').value;
                const species = catchDiv.querySelector('input.species').value;
                const location = catchDiv.querySelector('input.location').value;
                const bait = catchDiv.querySelector('input.bait').value;
                const captureTime = catchDiv.querySelector('input.captureTime').value;


                await request(`http://localhost:3030/data/catches/${_catch._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        'X-Authorization': accessToken
                    },
                    body: JSON.stringify({angler, weight, species, location, bait, captureTime})
                });

                document.location.reload();
            });

            if (userId != _catch._ownerId) {
                updateButton.disabled = true;
                deleteButton.disabled = true;
            }

            catchDiv.append(updateButton, deleteButton);

            catchesEl.append(catchDiv);
        });
}