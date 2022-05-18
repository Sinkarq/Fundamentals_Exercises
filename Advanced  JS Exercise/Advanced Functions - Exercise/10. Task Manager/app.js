function solve() {
    const addDivEl = document.querySelector(`section:nth-child(1) div:nth-child(2) form`);
    const openDivEl = document.querySelector(`section:nth-child(2) div:nth-child(2)`);
    const inProgressDivEl = document.querySelector(`section:nth-child(3) div:nth-child(2)`);
    const completeDivEl = document.querySelector(`section:nth-child(4) div:nth-child(2)`);

    const addButton = addDivEl.querySelector(`button`);
    addButton.addEventListener(`click`, (e) => {
        e.preventDefault();
        let inputs = addDivEl.querySelectorAll(`input`);
        let task = inputs[0].value;
        let description = addDivEl.querySelector(`textarea`);
        let date = inputs[1].value;

       if (
           task == `` || task == null || task.toString() == "NaN",
           description.value == `` || description.value == null || description.value.toString() == "NaN",
           date == `` || date == null || date.toString() == "NaN"
       ) {
           return;
       }

       const createdElement = create(task, description.value, date);

       openDivEl.appendChild(createdElement);

        inputs[0].value = "";
        inputs[1].value = "";
        description.value = "";
    });

    function deleteChild(e) {
        return e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }

    function create(task, description, date) {
        const article = document.createElement(`article`);

        const titleEl = document.createElement(`h3`);
        titleEl.textContent = task;
        article.appendChild(titleEl);

        const descriptionEl = document.createElement(`p`);
        descriptionEl.textContent = `Description: ${description}`;
        article.appendChild(descriptionEl);

        const dateEl = document.createElement(`p`);
        dateEl.textContent = `Due date: ${date}`;
        article.appendChild(dateEl);


            const divEl = document.createElement(`div`);
            divEl.className = `flex`;



            const startButton = document.createElement(`button`);
            startButton.className = `green`;
            startButton.textContent = "Start";
            divEl.appendChild(startButton);




            const deleteButton = document.createElement(`button`);
            deleteButton.className = `red`;
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener(`click`, (e) => deleteChild(e));
            divEl.appendChild(deleteButton);


        article.appendChild(divEl);

        startButton.addEventListener(`click`, (e) => {
            const removedArticle = deleteChild(e);

            const buttons = removedArticle.querySelectorAll(`button`);

            for (const button of buttons) {
                button.parentNode.removeChild(button);
            }

            const divElEl = document.createElement(`div`);
            divElEl.className = `flex`;

            const finishButton = document.createElement(`button`);
            finishButton.textContent = `Finish`;
            finishButton.addEventListener(`click`, () => {
                const deleted = deleteButton.parentNode.parentNode.parentNode.removeChild(deleteButton.parentNode.parentNode);
                const dButtons = deleted.querySelectorAll(`button`);
                for (const button of dButtons) {
                    button.parentNode.removeChild(button);
                }
                completeDivEl.appendChild(deleted);
            })
            finishButton.className = `orange`;
            divElEl.appendChild(finishButton);

            const deleteButton = document.createElement(`button`);
            deleteButton.textContent = `Delete`;
            deleteButton.className = `red`;
            deleteButton.addEventListener(`click`, () => {
                deleteButton.parentNode.parentNode.parentNode.removeChild(deleteButton.parentNode.parentNode);
            })
            divElEl.appendChild(deleteButton);

            article.appendChild(divElEl);


            inProgressDivEl.appendChild(removedArticle);
        });

        return article;
    }
}