function Solve(array) {
    let sort = 0;
    let output = [];
    array.sort((a, b) => a - b);
    const originalSize = array.length;
    while (output.length != originalSize) {
        output.push(array[0]);
        output.push(array[array.length-1]);
        array.pop();
        array.shift();
    }
    return output;
}

console.log(Solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));