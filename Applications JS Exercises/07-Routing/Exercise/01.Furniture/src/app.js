import page from "//unpkg.com/page/page.mjs";
import {clearStorage, isLoggedIn} from "./misc.js";
import {loginPage} from "./Views/loginPage.js";
import {registerPage} from "./Views/registerPage.js";
import {homePage} from "./Views/homePage.js";
import {createPage} from "./Views/createPage.js";
import {myPage} from "./Views/myPage.js";

const guestNav = document.querySelector('#guest');
const userNav = document.querySelector('#user');

export const refreshNavbarState = () => {
    if (isLoggedIn()) {
        guestNav.style.display = 'none';
        userNav.style.display = 'inline';
    } else {
        guestNav.style.display = 'inline';
        userNav.style.display = 'none';
    }
};

document.querySelector('#logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    clearStorage();
    refreshNavbarState();
});

refreshNavbarState();

page('/users/login', loginPage);
page('/users/register', registerPage);
page('/', await homePage);
page('/home', await homePage);
page('/create', createPage);
page('/my-furniture', await myPage);


page.start();