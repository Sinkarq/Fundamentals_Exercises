import {isLogged} from "./Identity.js";
import {createMovie, deleteMovie, editMovie, getMovie, getMovieLikesCount, getMovies, likeMovie} from "./request.js";
import {hideEverySection, router} from "./router.js";

export const navElements = {
    welcomeNavElement: document.querySelector('[data-id="WelcomeMessage"]'),
    logoutNavButton: document.querySelector('[data-id="Logout"]'),
    registerNavButton: document.querySelector('[data-id="Register"]'),
    loginNavButton: document.querySelector('[data-id="Login"]'),
    moviesNavButton: document.querySelector('[data-id="Movies"]')
};

export function refreshVisibilityNavBar() {
    if (isLogged()) {
        const email = localStorage.getItem('email');
        navElements.welcomeNavElement.style.display = `block`;
        navElements.welcomeNavElement.textContent = `Welcome, ${email}`;
        navElements.registerNavButton.style.display = 'none';
        navElements.loginNavButton.style.display = 'none';
        navElements.logoutNavButton.style.display = 'block';
    } else {
        navElements.welcomeNavElement.style.display = `none`;
        navElements.registerNavButton.style.display = 'block';
        navElements.loginNavButton.style.display = 'block';
        navElements.logoutNavButton.style.display = 'none';
    }
};

export async function fillMoviesSection() {
    const movies = await getMovies();

    const moviesCard = document.querySelector('.card-deck');
    moviesCard.innerHTML = '';
    movies.forEach(movie => {
        moviesCard.appendChild(createMovieCard(movie));
    });

    addDetailsFunctionality();
}

function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('card');
    movieCard.classList.add('mb-4');

    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.src = movie.img;
    image.alt = 'Card image cap';
    image.width = 400;
    movieCard.appendChild(image);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('h4');
    title.classList.add('card-title');
    title.textContent = movie.title;
    cardBody.appendChild(title);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    const detailsLink = document.createElement('a');
    const buttonDetails = document.createElement('button');
    buttonDetails.type = 'button';
    buttonDetails.classList.add('btn');
    buttonDetails.classList.add('btn-info');
    buttonDetails.textContent = 'Details';
    buttonDetails.id = movie._id;
    detailsLink.appendChild(buttonDetails);
    cardFooter.appendChild(detailsLink);


    movieCard.append(image, cardBody, cardFooter);

    return movieCard;
}

(function renderAddMovieSectionFunctionality() {
    const addMovieButton = document.querySelector('#add-movie-button a');
    addMovieButton.addEventListener('click', (e) => {
        e.preventDefault();

        hideEverySection();

        document.querySelector('#add-movie').style.display = 'block';
    });
})();

(function addMovieFunctionality() {
    const submitButton = document.querySelector('#add-movie button');

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const form = document.querySelector('#add-movie form');
        const formData = new FormData(form);
        const {title, description, imageUrl} = Object.fromEntries(formData);

        if (!title || !description || !imageUrl) {
            alert('Something is missing.');
            return;
        }

        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            alert('You are not logged in.');
        }

        await createMovie(title, description, imageUrl, accessToken);

        await router('Movies');
    });
})();

function addDetailsFunctionality() {
    const movieCardDetailButtons = document.querySelectorAll('.card button');

    movieCardDetailButtons.forEach(detailsButton => detailsButton.addEventListener('click', async (e) => {
        e.preventDefault();

        hideEverySection();

        await renderDetailsPage(e.currentTarget.id);
    }));
}

async function renderDetailsPage(id) {
    const movie = await getMovie(id);

    let isCreator = false;

    if (localStorage.getItem('_id') == movie._ownerId) {
        isCreator = true;
    }

    const likes = await getMovieLikesCount(id);

    const movieDetailsPage = await createDetailsPage(movie.title, movie.description, movie.img, isCreator, likes, id);

    const container = document.querySelector('#container');
    container.insertBefore(document.querySelector('#movie'), movieDetailsPage);
}

async function createDetailsPage(title, description, img, isCreator, likes, id) {
    const movieExampleSection = document.querySelector('#movie-example');
    movieExampleSection.innerHTML = '';
    movieExampleSection.style.display = 'block';

    let manageButtons = '';

    if (isCreator) {
        manageButtons = '<a class="btn btn-danger" href="#">Delete</a>\n<a class="btn btn-warning" href="#">Edit</a>';
    } else {
        manageButtons = '<a class="btn btn-primary" href="#">Like</a>';
    }

    movieExampleSection.innerHTML = `<div class="container">
                <div class="row bg-light text-dark">
                    <h1>${title}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1>
                    <div class="col-md-8">
                        <img class="img-thumbnail" src=${img}
                            alt="Movie" height="1100" width="700">
                    </div>
                    <div class="col-md-4 text-center">
                        <h3 class="my-3 ">Movie Description</h3>
                        <p>${description}</p>   
                        ${manageButtons}
                        <span class="enrolled-span">Liked ${likes}</span>
                    </div>
                </div>
            </div>`;

    movieExampleSection.querySelector('.container').id = id;

    const deleteButton = movieExampleSection.querySelector('.btn-danger');

    if (deleteButton) {
        deleteButton.addEventListener('click', async (e) => {
            e.preventDefault();

            await deleteMovie(id, localStorage.getItem('accessToken'));

            await router('Movies');
        });
    }

    const editButton = movieExampleSection.querySelector('.btn-warning');
    if (editButton) {
        editButton.addEventListener('click', async (e) => {
            e.preventDefault();
            await router('Edit');
        });
    }

    const likeButton = movieExampleSection.querySelector('.btn-primary');
    if (likeButton) {
        likeButton.addEventListener('click', async (e) => {
            e.preventDefault();

            const movieId = document.querySelector('#movie-example .container').id;
            await likeMovie(movieId, localStorage.getItem('accessToken'));

            likeButton.outerHTML = `<span class="btn btn-success" href="#">Like</span>`;

            const likesCountSpan = movieExampleSection.querySelector('.enrolled-span');
            likesCountSpan.textContent = `Liked ${await getMovieLikesCount(movieId)}`;
        });
    }

    return movieExampleSection;
}

(function addEditFunctionality() {
    document.querySelector('#edit-movie button').addEventListener('click', async (e) => {
        e.preventDefault();

        const movieId = document.querySelector('#movie-example .container').id;
        const form = document.querySelector('#edit-movie form');
        const {title, description, imageUrl} = Object.fromEntries(new FormData(form));
        await editMovie(
            movieId,
            title,
            description,
            imageUrl,
            localStorage.getItem('accessToken'));
        hideEverySection();
        await renderDetailsPage(movieId);
    });
})();