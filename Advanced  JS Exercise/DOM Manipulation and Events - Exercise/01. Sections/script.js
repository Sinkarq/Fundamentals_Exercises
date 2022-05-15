function create(words) {
   const contentEl = document.querySelector("#content");

   for (const word of words) {
      const divEl = document.createElement('div');
      const paragraphEl = document.createElement(`p`);
      paragraphEl.style.display = "none";
      paragraphEl.textContent = word;
      divEl.appendChild(paragraphEl);
      contentEl.appendChild(divEl);
      divEl.addEventListener("click", (e) => {
         paragraphEl.style.display = "inline";
      });
   }
}