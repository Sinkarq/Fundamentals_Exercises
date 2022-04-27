function SumEven(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++)
    {
        let num = Number(arr[i])
        if (num % 2 == 0) {
            counter += num;
        }
    }
    console.log(counter)
}