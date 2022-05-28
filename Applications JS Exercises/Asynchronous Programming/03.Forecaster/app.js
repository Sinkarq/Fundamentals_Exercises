function attachEvents() {
    const buttonEl = document.querySelector(`#submit`);
    const inputEl = document.querySelector(`#location`);

    const baseUrl = `http://localhost:3030/jsonstore/forecaster/`;

    const findLocation = async () => {
        const input = inputEl.value;

        let cityCode = ``;

        await fetch(baseUrl + `locations`)
            .then(res => res.json())
            .then(data => {
                const result = Array.from(data).find(x => x[`name`] == input)[`code`];
                cityCode = result;
            })
            .catch(err => console.log(err));

        return cityCode;
    };

    const getCurrentConditions = async (time, cityCode) => {
        let response;

        await fetch(`${baseUrl}/${time}/${cityCode}`)
            .then(res => res.json())
            .then(data => {
                response = data;
            })
            .catch(err => console.log(err));

        return response;
    };

    buttonEl.addEventListener(`click` , async () => {
        let cityCode = ``;
        let currentConditions;

        await findLocation()
            .then(result => cityCode = result)
            .catch(err => console.log(err));

        await getCurrentConditions(`today`,cityCode)
            .then(result => currentConditions = result)
            .catch(err => console.log(err));

        await getCurrentConditions(`upcoming`, cityCode)
            .then(result => console.log(result))
            .catch(err => console.log(err));
    });
}

attachEvents();