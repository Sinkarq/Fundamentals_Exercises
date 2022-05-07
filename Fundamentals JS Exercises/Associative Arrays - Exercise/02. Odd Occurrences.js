function solve(input) {
    let wordsInInput = input.split(" ");
    let output = {};
    for (const wordsInInputElement of wordsInInput) {
        let word = wordsInInputElement.toLowerCase();
        if (output.hasOwnProperty(word)) {
            output[word] += 1;
        }
        else {
            output[word] = 1;
        }
    }
    let out = Object.entries(output).filter(x => x[1] % 2 == 1);
    console.log(out.map(x => x[0]).join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
//solve('Cake IS SWEET is Soft CAKE sweet Food');