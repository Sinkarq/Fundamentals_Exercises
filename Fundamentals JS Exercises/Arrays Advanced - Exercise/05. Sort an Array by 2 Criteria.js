function SortAnArray(array) {
    let obj = array.sort(function (a , b) {
        if (a.length > b.length) {
            return 1;
        }
        else if (a.length >! b.length) {
            return -1;
        }
        else if (a.length == b.length) {
            let aWord = a.toUpperCase();
            let bWord = b.toUpperCase();
            return 1;
        }
    });
    console.log(obj)
}

SortAnArray([`alpha`, `beta`, `gamma`])