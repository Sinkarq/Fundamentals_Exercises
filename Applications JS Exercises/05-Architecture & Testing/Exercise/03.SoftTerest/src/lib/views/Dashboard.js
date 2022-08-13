import {findElement} from "../DOM.js";
import {getIdeas} from "../API.js";



export async function loadIdeasDashboard() {
    const dashboard = findElement('#dashboard-holder');
    dashboard.innerHTML = '';

    const ideas = await getIdeas();

    if (ideas) {
        ideas.forEach(idea => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('overflow-hidden');
            card.classList.add('current-card');
            card.classList.add('details');
            card.style.width = '20rem';
            card.style.height = '18rem';

            card.innerHTML = `<div class="card-body" id="${idea._id}">
                    <p class="card-text">${idea.title}</p>
                </div>
                <img class="card-image" src="${idea.img}" alt="Card image cap">
                <a class="btn" href="">Details</a>`;

            dashboard.appendChild(card);
        });
    } else {
        ideas.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';
    }
}