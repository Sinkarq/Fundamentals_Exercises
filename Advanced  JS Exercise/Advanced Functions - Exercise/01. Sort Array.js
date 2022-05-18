function solve(array, criteria) {
    if (criteria == "asc") {
        return array.sort((a, b) => a - b);
    }
    return array.sort((a, b) => b - a);
}