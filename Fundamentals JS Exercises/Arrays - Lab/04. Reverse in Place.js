function reverseInPlace(arr) {
    let output = "";
    for (let i = arr.length - 1; i >= 0 ; i--)
    {
        output += arr[i] + " ";
    }
    console.log(output)
}