function Solve(num1, num2) {
    let smallestNum = Math.min(num1, num2);
    for (let i = 2; i <= smallestNum; i++) {
        if (num1%i==0 && num2%i==0) {
            console.log(i);
            break;
        }
    }
}

Solve(2154, 458);