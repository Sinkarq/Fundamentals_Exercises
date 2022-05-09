function Solve(array) {
    let obj = {};
    for (let i = 0; i < array.length; i+=2) {
        obj[array[i]] = array[i+1]
    }
    console.log(obj);
}

Solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);