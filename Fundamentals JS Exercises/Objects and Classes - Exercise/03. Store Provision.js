function Store(store, delivery) {
    let allInOne = [];
    allInOne.push(store, delivery);
    let list = {};
    for (const store of allInOne) {
        for (let i = 0; i < store.length; i+=2) {
            if (list[store[i]] == undefined) {
                list[store[i]] = Number(store[i+1]);
            }
            else {
                list[store[i]] += Number(store[i+1]);
            }
        }
    }

    for (const key of Object.keys(list)) {
        console.log(`${key} -> ${list[key]}`)
    }
}

Store(["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]);