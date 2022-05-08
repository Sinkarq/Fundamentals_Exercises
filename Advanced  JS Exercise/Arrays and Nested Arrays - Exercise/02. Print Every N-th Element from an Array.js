function Solve(array, element) {
    let output = [];
    for (let i = 0; i < array.length; i+=element) {
        output.push(array[i]);
    }
    return output;
}

console.log(Solve(['5',
        '20',
        '31',
        '4',

        '20'],

    2))