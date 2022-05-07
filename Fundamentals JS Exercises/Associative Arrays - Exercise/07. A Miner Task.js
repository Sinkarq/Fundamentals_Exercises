function Solve(input) {
    let storage = {};
    for (let i = 0; i < input.length; i += 2) {
        if (!storage.hasOwnProperty(input[i])) {
            storage[input[i]] = Number(input[i+1]);
        }
        else {
            storage[input[i]] += Number(input[i+1]);
        }
    }
    for (const [resource, qty] of Object.entries(storage)) {
        console.log(resource, "->", qty);
    }
}

// Even - quantity, Odd - resource

Solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);