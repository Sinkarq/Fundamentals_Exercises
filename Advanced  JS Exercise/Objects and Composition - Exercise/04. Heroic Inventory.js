function Solve(array) {
    let heroes = [];

    for (const hero of array) {
        let [name, level, items] = hero.split(" / ");
        let itemsStorage = [];
        const itemsArray = items.split(", ");
        for (const item of itemsArray) {
            itemsStorage.push(item);
        }
        level = level.toString();
        heroes.push({name: name, level: level, items: itemsStorage});
    }

    return JSON.stringify(heroes);
}

console.log(Solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));