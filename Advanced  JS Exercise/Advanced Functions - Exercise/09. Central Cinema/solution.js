function solve() {
    document.querySelector(`#container button`).addEventListener(`click`, (e) => {
        //e.preventDefault();
        addMovie();
    });

    const buttons = document.querySelectorAll(`#archive button`);
    const clearButton = buttons[buttons.length - 1];
    clearButton.addEventListener('click', () => {
       const archivedFilms = document.querySelectorAll(`#archive ul li`);
       console.log(archivedFilms);
        for (const archivedFilm of archivedFilms) {
            archivedFilm.parentNode.removeChild(archivedFilm);
        }
    });


    function addMovie() {
        const [name, hall, ticketPrice] = getMovieInput();

        const moviesList = document.querySelector('#movies ul');

        const liEl = document.createElement(`li`);

        const spanName = document.createElement(`span`);
        spanName.textContent = name;
        liEl.appendChild(spanName);


        const strongEl = document.createElement(`strong`);
        strongEl.textContent = `Hall: ${hall}`;
        liEl.appendChild(strongEl);


        const divEl = document.createElement(`div`);

        const divStrongEl = document.createElement(`strong`);
        if (ticketPrice.toString() == "NaN") {
            return;
        }
        divStrongEl.textContent = ticketPrice.toFixed(2);
        divEl.appendChild(divStrongEl);

        const inputEl = document.createElement(`input`);
        inputEl.setAttribute(`placeholder`, "Tickets sold");
        divEl.appendChild(inputEl);

        const buttonEl = document.createElement(`button`);
        buttonEl.textContent = "Archive";
        buttonEl.addEventListener('click', (e) => {
            //e.preventDefault();
            const liEl = e.target.parentNode.parentNode;
            const _name = liEl.querySelector(`span`);
            const price = Number(liEl.querySelectorAll(`strong`)[1].textContent);
            const quantity = Number(liEl.querySelector(`input`).value);
            if (quantity == 0 || quantity.toString() == "NaN") {
                return;
            }
            archive(name, price, quantity);
            moviesList.removeChild(liEl);
        })
        divEl.appendChild(buttonEl);

        liEl.appendChild(divEl);


        moviesList.appendChild(liEl);
    }

    function getMovieInput() {
        const containerEl = document.querySelector(`#container`);

        const nameEl = containerEl.querySelector(`[placeholder="Name"]`);
        const hallEl = containerEl.querySelector(`[placeholder="Hall"]`);
        const ticketPriceEl = containerEl.querySelector(`[placeholder="Ticket Price"]`);

        const name = nameEl.value;
        const hall = hallEl.value;
        let ticketPrice = Number(ticketPriceEl.value);

        nameEl.value = "";
        hallEl.value = "";
        ticketPriceEl.value = "";



        return [name, hall, ticketPrice];
    }

    function archive(name, price, quantity) {
        const archivedUlEl = document.querySelector(`#archive ul`);
        const totalPrice = price * quantity;

        const liEl = document.createElement(`li`);

        const spanName = document.createElement(`span`);
        spanName.textContent = name;
        liEl.appendChild(spanName);

        const strongEl = document.createElement(`strong`);
        strongEl.textContent = `Total amount: ${totalPrice.toFixed(2)}`
        liEl.appendChild(strongEl);

        const buttonEl = document.createElement(`button`);
        buttonEl.textContent = "Delete";
        buttonEl.addEventListener('click', (e) => {
            //e.preventDefault();
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        })
        liEl.appendChild(buttonEl);

        archivedUlEl.appendChild(liEl);
    }
}