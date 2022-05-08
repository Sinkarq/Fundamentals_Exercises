function Solve(array, count) {
    for (let i = 0; i < count; i++) {
        let last = array.pop();
        array.unshift(last);
    }
    console.log(array.join(" "));
}

Solve(["1", "2", "3", "4"], 2)