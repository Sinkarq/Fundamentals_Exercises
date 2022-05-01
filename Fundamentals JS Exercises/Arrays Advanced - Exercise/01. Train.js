function Train(array) {
    let maxCapacity = Number(array[1]);
    let output = array[0].split(` `).map(x => Number(x));
    let passengers = [];
    for (let i = 2; i < array.length; i++) {
        if (array[i].includes(`Add`)) {
            let wagonSize = Number(array[i].split(` `)[1]);
            output.push(wagonSize)
        }
        else {
            passengers.push(Number(array[i]));
        }
    }

    for (let w = 0; w < output.length; w++) {
        for (let p = 0; p < passengers.length; p++) {
            if (output[w] + passengers[p] <= maxCapacity && passengers != null) {
                output[w] += passengers[p];
                passengers[p] = null;
            }
        }
    }




    console.log(output.join(" "));
}
/*Train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']); // 72 54 21 12 4 75 23 10 0*!/*/


Train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']); // 10 10 10 10 10 10 10*/
