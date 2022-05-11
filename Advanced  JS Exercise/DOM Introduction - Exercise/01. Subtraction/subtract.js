function subtract() {
    const firstNumberEl = document.querySelector("#firstNumber");
    const secondNumberEl = document.querySelector("#secondNumber");

    const firstNumber = Number(firstNumberEl.value);
    const secondNumber = Number(secondNumberEl.value);

    const resultEl = document.querySelector("#result");
    resultEl.textContent = firstNumber - secondNumber;
}