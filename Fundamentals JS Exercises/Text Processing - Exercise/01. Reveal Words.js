function Solve(wordsInput, sentence) {
    let words = wordsInput.split(", ");
    for (const word of words) {
        let asterikses = "*".repeat(word.length);
        sentence = sentence.replace(asterikses, word);
    }

    console.log(sentence);
}

Solve('great',
    'softuni is ***** place for learning new programming languages');
