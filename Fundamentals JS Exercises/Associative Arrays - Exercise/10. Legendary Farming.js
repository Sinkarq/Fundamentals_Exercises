function Solve(input) {
    let storage = {};
    storage["motes"] = 0;
    storage["shards"] = 0;
    storage["fragments"] = 0;

    let junkStorage = {};

    let inputTokens = input.split(" ");
    for (let i = 0; i < inputTokens.length; i+=2) {
        let item = inputTokens[i+1].toLowerCase();
        let qty = Number(inputTokens[i]);
        if (storage.hasOwnProperty(item)) {
            storage[item] += qty;
        }
        else if (junkStorage.hasOwnProperty(item)){
            junkStorage[item] += qty;
        }
        else if (!junkStorage.hasOwnProperty(item)){
            junkStorage[item] = qty;
        }
    }

    for (const [item, qty] of Object.entries(storage)) {
        if (item == "shards" && qty >= 250) {
            console.log("Shadowmourne obtained!");
            storage[item] = storage[item] - 250;

        }
        else if(item == "fragments" && qty >= 250) {
            console.log("Valanyr obtained!");
            storage[item] = storage[item] - 250;
        }
        else if(item == "motes" && qty >= 250) {
            console.log("Dragonwrath obtained!");
            storage[item] = storage[item] - 250;
        }
    }

    let keys = Object.entries(storage).sort((a, b) => b[1] - a[1]);
    for (const [item, qty] of keys) {
        console.log(`${item}: ${qty}`);
    }
    let junkItems = Object.entries(junkStorage).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [item, qty] of junkItems) {
        console.log(`${item}: ${qty}`);
    }
}

Solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
/*
Valanyr obtained!
fragments: 5
shards: 5
motes: 3
leathers: 6
stones: 5
*/
