function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const allTrs = document.querySelectorAll("tbody tr");
      const searchTextEl = document.querySelector("#searchField");
      for (const tr of allTrs) {
         tr.className = "";
         if (tr.innerHTML.includes(searchTextEl.value)) {
            tr.className = "select";
         }
      }
      searchTextEl.value = "";
   }
}