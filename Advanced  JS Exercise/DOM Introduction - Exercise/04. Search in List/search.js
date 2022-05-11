function search() {
   const liElements = document.querySelectorAll("ul li");
   const searchText = document.querySelector("#searchText");
   const resultEl = document.querySelector("#result");

   let counter = 0;
    for (const liElement of liElements) {
        const liElementContent = liElement.textContent;
        liElement.innerHTML = `${liElementContent}`;
        if (liElement.textContent.includes(searchText.value)) {

            /* Another way of solving
            liElement.style.fontWeight = "bold";
            liElement.style.textDecoration = "underline";*/

            liElement.innerHTML = `<b><u>${liElementContent}</u></b>`;
            counter++;
        }
    }

    searchText.value = "";

    resultEl.textContent = `${counter} matches found!`;
}
