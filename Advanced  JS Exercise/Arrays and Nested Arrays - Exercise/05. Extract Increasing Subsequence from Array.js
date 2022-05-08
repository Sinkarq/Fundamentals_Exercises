function Solve(array) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let result = [];
    array.reduce((accumulator, current) => {
        if (current >= biggest) {
            accumulator.push(current);
            biggest = current;
        }
        return accumulator;
    }, result);

    return result;
}

console.log(Solve([1, 3, 8, 4,10, 12, 3, 2, 24]));