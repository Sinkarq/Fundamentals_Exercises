function Solve(array) {
    let heroes = [];

    for (const hero of array) {
        let [name, level, items] = hero.split(" / ");
        let itemsStorage = [];
        const itemsArray = items ? items.split(", ") : [];
        for (const item of itemsArray) {
            itemsStorage.push(item);
        }
        level = Number(level);
        heroes.push({name, level, items: itemsStorage});
    }

    console.log(JSON.stringify(heroes));
}

Solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);