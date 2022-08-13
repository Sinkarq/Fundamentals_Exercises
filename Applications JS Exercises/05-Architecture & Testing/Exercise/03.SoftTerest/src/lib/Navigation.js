import {
    findElement,
    hideElement,
    showCreatePage,
    showDashboardPage,
    showElement,
    showHomePage,
    showLoginPage,
    showRegisterPage
} from "./DOM.js";
import {isLogged} from "./misc.js";

export const navElements = {
    homeButton: findElement('#homeLink'),
    dashboardButton: findElement('#catalogLink'),
    logoutButton: findElement('#logoutBtn'),
    loginButton: findElement('#loginLink'),
    registerButton: findElement('#registerLink'),
    createButton: findElement('#createLink')
};

export const attachNavigation = () => {
    navElements.homeButton.addEventListener('click', () => {
        showHomePage();
    });

    navElements.dashboardButton.addEventListener('click', () => {
        showDashboardPage();
    });

    navElements.loginButton.addEventListener('click', () => {
        showLoginPage();
    });

    navElements.registerButton.addEventListener('click', () => {
        showRegisterPage();
    });

    navElements.createButton.addEventListener('click', () => {
        showCreatePage();
    });
};

export const refreshNavigation = () => {
    if (isLogged()) {
        hideElement([navElements.loginButton, navElements.registerButton]);
        showElement([navElements.logoutButton, navElements.createButton]);
    } else {
        hideElement([navElements.logoutButton, navElements.createButton]);
        showElement([navElements.loginButton, navElements.registerButton]);
    }
};