function add(num) {
    let sum = 0;

    function inner(number) {
        sum += number;
        return inner;
    }

    inner.toString = () => {
        return sum.toString();
    }

    return inner(num);
}

console.log(add(3).toString());