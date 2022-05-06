function Track(input) {
    let output = {};
    let wordsToSearch = input[0].split(" ");

    for (const word of wordsToSearch) {
        output[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        if (output.hasOwnProperty(input[i])) {
            output[input[i]] += 1;
        }
    }

    let sorted = Object.entries(output).sort((a, b) => b[1] - a[1]);

    for (const [word, value] of sorted) {
        console.log(word, "-", value);
    }
}

Track(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);

Track([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);