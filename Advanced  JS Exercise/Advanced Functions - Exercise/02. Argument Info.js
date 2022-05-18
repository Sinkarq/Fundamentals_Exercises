function solve() {
    let appearences = {};
    for (const argument of arguments) {
        const type = typeof(argument);
        const value = argument;

        if (appearences.hasOwnProperty(type)) {
            appearences[type.toString()] += 1;
        }
        else {
            appearences[type.toString()] = 1;
        }

        console.log(`${type}: ${value}`);
    }

    Object.entries(appearences).forEach(x=> console.log(x[0], "=", x[1]));
}

solve('cat', 42, function () { console.log('Hello world!'); })