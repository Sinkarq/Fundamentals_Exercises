function Distinct(array) {
    let newArr = [];
    for (let number of array) {
        if (!newArr.includes(number)) {
            newArr.push(number);
        }
    }
    console.log(newArr.join(" "));
}