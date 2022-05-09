function Solve(array) {
    let result = [];
    array.forEach(element => {
        let [town, product, price] = element.split(" | ");
        price = Number(price);

        if (!result[product]) {
            result[product] = {};
        }

        result[product][town] = price;
    })

    for (const product in result) {
        const sorted = Object.entries(result[product]).sort((a, b) => a[1] - b[1]);
        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

Solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);