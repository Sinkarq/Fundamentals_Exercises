function SumDigits(input) {
    let numAsString = input.toString();
    let count = 0;
    for (let i = 0; i < numAsString.length; i++)
    {
        count += Number(numAsString[i]);
    }
    console.log(count)
}

SumDigits(23);