function Catalogue(array) {
    let output = [];

    let outputString = "";

    for (const product of array) {
        let firstLetter = product.split(" : ")[0][0];
        if (output[firstLetter] === undefined){
            output[firstLetter] = [];
            output[firstLetter].push(product);
        }
        else {
            output[firstLetter].push(product);
        }

    }

    let keys = [];
    for (const product of Object.keys(output)) {
        keys.push(product);
    }
    keys.sort((x, y) => x.localeCompare(y));

    for (const key of keys) {
        let toAdd = key;
        let pps = [];
        for (const product of output[key]) {
            pps.push(product);
            pps.sort((x, y) => x.localeCompare(y));
        }
        for (const pp of pps) {
            let name = pp.split(" : ")[0];
            let price = pp.split(" : ")[1];
            toAdd += `\n  ${name}: ${price}`
        }
        console.log(toAdd)
    }
}

Catalogue([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]);