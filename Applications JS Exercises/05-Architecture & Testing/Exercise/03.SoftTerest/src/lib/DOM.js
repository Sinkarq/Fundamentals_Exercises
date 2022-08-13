import {loadIdeasDashboard} from "./views/Dashboard.js";

export const findElement = input => {
    let arr = [];
    if (Array.isArray(input)) {
        input.forEach(x => arr.push(document.querySelector(x)));
    } else {
        return document.querySelector(input);
    }
    return arr;
};

const hideAllViews = () => {
    hideElement(findElement(['#homePage', '#registerPage', '#loginPage', '#dashboard-holder', '#detailsPage', '#createPage']));
};

const changeElementDisplay = (input, style) => {
    if (Array.isArray(input)) {
        const areHtmlElements = input.every(x => x instanceof HTMLElement);
        const areSelectors = input.every(x => x instanceof String);

        if (areHtmlElements) {
            input.forEach(el => el.style.display = style);
        } else if (areSelectors) {
            for (const selector of input) {
                document.querySelector(selector).style.display = style;
            }
        }
    } else {
        if (input instanceof HTMLElement) {
            input.style.display = style;
        } else if (input instanceof String) {
            document.querySelector(input).style.display = style;
        }
    }
};

export const views = {
    homePage: findElement('#homePage'),
    registerPage: findElement('#registerPage'),
    loginPage: findElement('#loginPage'),
    dashboardPage: findElement('#dashboard-holder'),
    detailsPage: findElement('#detailsPage'),
    createPage: findElement('#createPage')
};

const showView = view => {
    hideAllViews();
    view.style.display = 'block';
};

(function redirectIfUserIsLoggedOrNotLoggedToCertainPage() {
    findElement('#registerPage .alreadyUser a').addEventListener('click', (e) => {
        e.preventDefault();
        showLoginPage();
    });

    findElement('#loginPage .alreadyUser a').addEventListener('click', (e) => {
        e.preventDefault();
        showRegisterPage();
    });
})();

export const showHomePage = () => showView(views.homePage);
export const showRegisterPage = () => showView(views.registerPage);
export const showLoginPage = () => showView(views.loginPage);
export const showDashboardPage = async () => {
    showView(views.dashboardPage);
    await loadIdeasDashboard();
};
export const showDetailsPage = () => showView(views.detailsPage);
export const showCreatePage = () => showView(views.createPage);

export const showElement = input => changeElementDisplay.call(null, input, 'block');
export const hideElement = input => changeElementDisplay.call(null, input, 'none');