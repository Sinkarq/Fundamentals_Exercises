function solve() {
  const text = document.querySelector("#text").value.split(" ");
  const namingConvention = document.querySelector("#naming-convention").value;

  const resultEl = document.querySelector("#result");

  if (namingConvention == "Pascal Case") {
    let output = text[0][0].toUpperCase() + text[0].slice(1).toLowerCase();

    for (let i = 1; i < text.length; i++) {
      output += text[i][0].toUpperCase() + text[i].slice(1).toLowerCase();
    }

    resultEl.textContent = output;
  }
  else if (namingConvention == "Camel Case") {
    let output = text[0].toLowerCase();

    for (let i = 1; i < text.length; i++) {
      output += text[i][0].toUpperCase() + text[i].slice(1).toLowerCase();
    }

    resultEl.textContent = output;
  }
  else {
    resultEl.textContent = "Error!";
  }
}