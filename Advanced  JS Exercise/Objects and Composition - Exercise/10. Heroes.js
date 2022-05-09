function solve() {
    let obj = {};

    obj.mage = (name) => {
        let mage = {name, health: 100, mana: 100};
        mage.cast = (spell) => {
            console.log(`${mage.name} cast ${spell}`);
            mage.mana--;
        }

        return mage;
    }

    obj.fighter = (name) => {
        let fighter = {name, health: 100, stamina: 100};
        fighter.fight = () => {
            console.log(`${fighter.name} slashes at the foe!`);
            fighter.stamina--;
        }

        return fighter;
    }

    return obj;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
