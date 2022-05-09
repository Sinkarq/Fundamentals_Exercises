function Solve(array) {
    let catalogue = [];
    array.forEach(x => {

        const [name, price] = x.split(" : ");

        catalogue.push({name, price});
    })

    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let output = {};

    for (const product of catalogue) {
        const category = product.name[0];
        if (!output[category]) {
            output[category] = [];
        }
        output[category].push({name: product.name, price: product.price});
    }

    for (const key in output) {
        console.log(key);
        for (const product of output[key]) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

Solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);