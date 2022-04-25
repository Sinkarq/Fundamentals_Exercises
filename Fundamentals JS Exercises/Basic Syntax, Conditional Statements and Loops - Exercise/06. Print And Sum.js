function PrintAndSum(start, end) {
    let firstOutput = "";
    let sum = 0;
    for (let i = start; i <= end ; i++)
    {
        firstOutput = firstOutput + ` ${i}`
        sum = sum + i;
    }
    console.log(firstOutput.trimStart());
    console.log(`Sum: ${sum}`);
}

PrintAndSum(5, 10)