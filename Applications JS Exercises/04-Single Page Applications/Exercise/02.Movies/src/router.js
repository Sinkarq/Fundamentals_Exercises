import {fillMoviesSection, refreshVisibilityNavBar} from "./DOM.js";
import {isLogged} from "./Identity.js";

const sections = document.querySelectorAll('section');

const routes = {
    'Login': renderLogin,
    'Register': renderRegister,
    'Movies': renderMovies,
    'Logout': renderLogout,
    'Edit': renderEdit,
};

export async function router(pathName) {
    const renderFunc = routes[pathName];
    await renderFunc();
    refreshVisibilityNavBar();
}

async function renderLogin() {
    hideEverySection();
    document.querySelector('#form-login').style.display = 'block';
}

async function renderRegister() {
    hideEverySection();
    document.querySelector('#form-sign-up').style.display = 'block';
}

async function renderEdit() {
    hideEverySection();
    document.querySelector('#edit-movie').style.display = 'block';
}

export async function renderMovies() {
    hideEverySection();

    const homePages = [...document.querySelectorAll('#home-page, #add-movie-button, #movie')];
    homePages.forEach(x => x.style.display = 'block');

    await fillMoviesSection();

    const addMovieButton = document.querySelector('#add-movie-button');
    if (isLogged()) {
        addMovieButton.style.display = 'block';
    } else {
        addMovieButton.style.display = 'none';
    }
}

async function renderLogout() {
    localStorage.clear();
    await renderMovies();
}

export const hideEverySection = () => sections.forEach(x => x.style.display = 'none');

