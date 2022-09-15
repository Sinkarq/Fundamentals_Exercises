import page from "//unpkg.com/page/page.mjs";
import {isLoggedIn} from "./misc.js";
import {loginPage} from "./Views/loginPage.js";
import {registerPage} from "./Views/registerPage.js";
import {homePage} from "./Views/homePage.js";

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

refreshNavbarState();

page('/users/login', loginPage);
page('/users/register', registerPage);
page('/', await homePage);
page('/home', await homePage)


page.start();