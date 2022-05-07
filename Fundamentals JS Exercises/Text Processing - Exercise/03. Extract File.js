function Solve(input) {
    let index = input.lastIndexOf("\\");
    let tokens = input.slice(index + 1).split(".");
    console.log(`File name: ${tokens[0]}`);
    console.log(`File extension: ${tokens[1]}`);
}

Solve('C:\\Internal\\training-internal\\Template.pptx');
Solve('C:\\Projects\\Data-Structures\\LinkedList.cs')