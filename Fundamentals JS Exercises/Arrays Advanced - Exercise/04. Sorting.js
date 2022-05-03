function SortIt(array) {
    let output = [];
    let sortAsc = array.slice().sort((a, b) => a-b);
    let sortDesc = array.slice().sort((a, b) => a-b).reverse()
    let sortDescTurn = true;
    let indexAsc = 0;
    let indexDesc = 0;
    while (output.length != array.length) {
        if (sortDescTurn) {
            output.push(sortDesc[indexDesc]);
            sortDescTurn = false;
            indexDesc++;
        }
        else if (!sortDescTurn) {
            output.push(sortAsc[indexAsc]);
            sortDescTurn = true;
            indexAsc++;
        }
    }

    console.log(output.join(" "));
}

SortIt([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); // 94 1 69 2 63 3 52 18 31 21
SortIt([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]); // 690 2 47 6 45 7 34 19 32 32

