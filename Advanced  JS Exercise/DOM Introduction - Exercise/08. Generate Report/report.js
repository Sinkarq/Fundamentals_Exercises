function generateReport() {
    const checkBoxes = document.querySelectorAll("th input");
    let input = [];
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            const propertyName = checkBoxes[i].getAttribute("name");
            input.push({propertyName, index: i});
        }
    }


    let storage = [];


    const people = document.querySelectorAll("tbody tr");
    for (const person of people) {
        let obj = {};
        let data = person.getElementsByTagName("td");

        for (const preference of input) {
            obj[preference.propertyName] = data[preference.index].textContent;
        }

        storage.push(obj);
    }

    const outputEl = document.querySelector("#output");
    outputEl.textContent = JSON.stringify(storage, null,  2);
}