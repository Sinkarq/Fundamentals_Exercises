function Solve(array) {
    const result = array.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        }
        else if (a.length == b.length) {
            return a.localeCompare(b);
        }
        else {
            return -1;
        }
    })
    result.forEach(x => console.log(x));
}