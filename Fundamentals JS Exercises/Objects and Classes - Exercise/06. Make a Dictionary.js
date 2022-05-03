function Dictionary(input) {
    let output = [];
    for (const obj of input) {
        output.push(JSON.parse(obj));
    }
    let print = [];
    for (const outputElement of output) {
        for (const outputElementElement of Object.keys(outputElement)) {
            print.push({name: outputElementElement, definition: outputElement[outputElementElement]});
        }
    }
    print.sort((x, y) => x.name.localeCompare(y.name));
    print.forEach(x => console.log(`Term: ${x.name} => Definition: ${x.definition}`))
}

Dictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);