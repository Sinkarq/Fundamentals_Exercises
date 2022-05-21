function solve(arr) {
    let storage = {};

    arr.forEach(x => {
        let [item, quantity] = x.split(' => ');
        quantity = Number(quantity);

        if (!storage.hasOwnProperty(item)) {
            storage[item] = quantity;
        } else {
            storage[item] += quantity;
        }
    });

    for (const [item, quantity] of Object.entries(storage)) {
        const juices = Math.floor(quantity / 1000);

        if (juices != 0) {
            console.log(`${item} => ${juices}`);
        }
    }
}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);