function solve() {
    const outputEl = document.querySelector("#output");
    const inputEl = document.querySelector("#input");
    outputEl.innerHTML = "";

    let sentences = inputEl.value.trim().split(".");
    if (sentences.length != 0) {
        for (let i = 0; i < sentences.length; i += 3) {
            let msg = "";

            if (sentences[i] != undefined && sentences[i] != "") {
                msg += sentences[i].trimStart() + ".";
            }
            if (sentences[i+1] != undefined && sentences[i+1] != "") {
                msg += sentences[i+1].trimStart() + ".";
            }
            if (sentences[i+2] != undefined && sentences[i+2] != "") {
                msg += sentences[i+2].trimStart() + ".";
            }

            outputEl.innerHTML += `<p>${msg}</p>`;
        }
    }
}