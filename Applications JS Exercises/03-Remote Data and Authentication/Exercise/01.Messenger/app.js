const messagesEl = document.querySelector(`#messages`);
const submitButton = document.querySelector(`#submit`);
const refreshButton = document.querySelector(`#refresh`);

getChats();

submitButton.addEventListener(`click`, () => {
    const author = document.querySelector(`[name="author"]`).value;
    const content = document.querySelector(`[name="content"]`).value;
    request(`http://localhost:3030/jsonstore/messenger`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            author: author,
            content: content
        })
    })
        .catch(x => console.log(x.message));
});

refreshButton.addEventListener(`click`, () => {
   messagesEl.textContent = "";
   getChats();
});

function getChats() {
    request(`http://localhost:3030/jsonstore/messenger`, {
        method: "GET"
    })
        .then(response => {
            const messages = Object.values(response);
            messages.forEach(message => {
                messagesEl.textContent += `${message.author}: ${message.content}\n`;
            });
        });
};

function request(url, options) {
    return fetch(url, options)
        .then(response => {
            if (response.status != 200) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .catch(x => console.error(x.message));
}