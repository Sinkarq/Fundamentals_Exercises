function getInfo() {
    const baseUrl = `http://localhost:3030/jsonstore/bus/businfo/`;

    const inputEl = document.querySelector(`#stopId`);
    const inputElValue = inputEl.value;
    inputEl.value = ``;

    const stopNameEl = document.querySelector(`#stopName`);

    const ulEl = document.querySelector(`#buses`);
    ulEl.innerHTML = ``;

    fetch(baseUrl + inputElValue)
        .then(res => res.json())
        .then(data => {
            stopNameEl.textContent = data.name;

            for (const [busId, time] of Object.entries(data[`buses`])) {
                const liEl = document.createElement(`li`);
                liEl.textContent = `Bus ${busId} arrives in ${time} minutes`
                ulEl.appendChild(liEl);
            }
        })
        .catch(() => {
            stopNameEl.textContent = `Error`;
        });
}

// "1308": {
//         "buses": {
//             "4": 13,
//             "12": 6,
//             "18": 7
//         },
//         "name": "St. Nedelya sq."
//     },