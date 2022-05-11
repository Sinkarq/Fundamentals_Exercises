function toggle() {
    const extraEl = document.querySelector("#extra");
    const buttonEl = document.querySelector(".button");
    const buttonElContent = buttonEl.textContent;

    console.log("asd")

    if (buttonElContent == "More") {
        extraEl.style.display = "block";
        buttonEl.textContent = "Less";
    }
    else {
        extraEl.style.display = "none";
        buttonEl.textContent = "More";
    }
}