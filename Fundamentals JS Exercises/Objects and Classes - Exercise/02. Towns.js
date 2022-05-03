function Solve(towns) {
    let output = [];

    for (const town of towns) {
        let townElements = town.split(" | ");
        output.push({
            town: townElements[0],
            latitude: Number(townElements[1]).toFixed(2),
            longitude: Number(townElements[2]).toFixed(2),
        });
    }

    output.forEach(x => console.log(x));
}

Solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);