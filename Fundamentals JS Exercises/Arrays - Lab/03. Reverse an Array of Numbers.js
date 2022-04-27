function ReverseIt(num, arr) {
    let reverse = [];
    let output = "";
    for (let i = 0; i < num; i++)
    {
        reverse.push(arr[i]);
    }
    for (let r = reverse.length - 1; r >= 0 ; r--)
    {
        output += reverse[r].toString() + " "
    }
    console.log(output.trim())
} 
ReverseIt(4, [-1, 20, 99, 5])