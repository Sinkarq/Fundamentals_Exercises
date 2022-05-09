function Solve(array) {
    let output = [];
    array[0] = array[0].replaceAll("| ", "");
    array[0] = array[0].replaceAll(" |", "");
    const [firstColumn, secondColumn, thirdColumn] = array[0].split(" ");

    for (let i = 1; i < array.length; i++) {
        array[i] = array[i].replaceAll("| ", "");
        array[i] = array[i].replaceAll(" |", "");
        let [name, latitude, longitude] = array[i].split(" ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        output.push({firstColumn: name, secondColumn: latitude, thirdColumn: longitude });
    }

    console.log(JSON.stringify(output));
}

Solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);