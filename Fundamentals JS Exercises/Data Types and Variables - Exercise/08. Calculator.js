function Calculator(num, operator, num2) {
    let result = 0;
    if (operator == "+") {
        result = num + num2;
    }
    else if (operator == "-") {
        result = num - num2;
    }
    else if (operator == "/") {
        result = num / num2;
    }
    else {
        result = num * num2;
    }
    console.log(result.toFixed(2));
}