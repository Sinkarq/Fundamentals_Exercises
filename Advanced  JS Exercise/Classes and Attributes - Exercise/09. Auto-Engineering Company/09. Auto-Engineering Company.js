function solve(array) {
    let storage = {};

    for (const arrEl of array) {
        let [producer, model, quantity] = arrEl.split(` | `);
        quantity = Number(quantity);

        if (!storage.hasOwnProperty(producer)) {
            storage[producer] = {};
        }

        if (!storage[producer].hasOwnProperty(model)) {
            storage[producer][[model]] = 0;
        }

        storage[producer][model] += quantity;
    }

    for (const brand of Object.entries(storage)) {
        console.log(brand[0]);
        for (const brandElement of Object.entries(brand[1])) {
            console.log(`###${brandElement[0]} -> ${brandElement[1]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);