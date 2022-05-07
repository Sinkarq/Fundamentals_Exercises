function Solve(input) {
    let parking = new Set();
    for (const inputElement of input) {
        let [action, licensePlate] = inputElement.split(", ");
        if (action == "IN") {
            parking.add(licensePlate);
        }
        else if (action == "OUT") {
            parking.delete(licensePlate);
        }
    }


    let filtered = Array.from(parking);

    filtered.sort();

    if (filtered.length != 0) {
        filtered.forEach(x => console.log(x));
    }
    else {
        console.log("Parking Lot is Empty");
    }

}

Solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);