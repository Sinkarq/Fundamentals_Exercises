function attachEventsListeners() {
    const magnitudes = {
        Kilometers: 1000,
        Meters: 1,
        Centimeters: 0.01,
        Millimeters: 0.001,
        Miles: 1609.34,
        Yards: 0.9144,
        Feet: 0.3048,
        Inches: 0.0254
    };

    const convertButtonEl = document.querySelector(`#convert`);
    console.log(convertButtonEl);
    convertButtonEl.addEventListener('click', () => {
        const inputUnit = document.querySelector(`select#inputUnits option:checked`).textContent;
        const outputUnit = document.querySelector(`select#outputUnits option:checked`).textContent;
        const inputValue = document.querySelector('#inputDistance').value;

        const meters = ConvertToMeters(inputUnit, inputValue)

        const magnitude = ConvertToMagnitude(outputUnit, meters);
        const outputDistance = document.querySelector(`#outputDistance`);
        outputDistance.value = magnitude;
    });

    const ConvertToMeters = (magnitude, value) => (magnitudes[magnitude] * Number(value));

    const ConvertToMagnitude = (magnitude, value) => (Number(value) / magnitudes[magnitude]);
}