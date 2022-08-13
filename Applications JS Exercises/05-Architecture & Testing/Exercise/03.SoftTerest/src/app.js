import {attachNavigation, refreshNavigation} from "./lib/Navigation.js";
import {findElement, showElement, showHomePage} from "./lib/DOM.js";
import {loginFunctionality} from "./lib/views/Login.js";
import {registerFunctionality} from "./lib/views/Register.js";
import {logout} from "./lib/API.js";
import {createIdeaFunctionality} from "./lib/views/Create.js";


findElement("#dashboard-holder");
createIdeaFunctionality();
showElement(findElement('#views'));
showHomePage();
attachNavigation();
refreshNavigation();

loginFunctionality();
registerFunctionality();
findElement('#logoutBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    await logout();
    localStorage.clear();
    refreshNavigation();
});

