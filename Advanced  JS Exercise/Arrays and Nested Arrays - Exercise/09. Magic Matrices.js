function Solve(matrix) {
    let result = true;
    let counts = [];
    for (const matrix1 of matrix) {
        let counter = 0;
        for (const matrix1Element of matrix1) {
            counter += matrix1Element;
        }
        counts.push(counter);
    }

    let firstCount = counts[0];
    for (const count of counts) {
        if (count != firstCount) {
            result = false;
        }
    }
    console.log(result);
}

Solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]])