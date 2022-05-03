//"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."

function Inventory(input) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let heroes = [];

    for (const hero of input) {
        let heroElements = hero.split(" / ");
        let heroName = heroElements[0];
        let level = heroElements[1];
        let items = heroElements[2];
        heroes.push(new Hero(heroName, level, items));
    }

    heroes.sort((x, y) => x.level - y.level);
    heroes.forEach(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))
}

Inventory([`Isacc / 25 / Apple, GravityGun`,
`Derek / 12 / BarrelVest, DestructionSword`,
`Hes / 1 / Desolator, Sentinel, Antara`]);