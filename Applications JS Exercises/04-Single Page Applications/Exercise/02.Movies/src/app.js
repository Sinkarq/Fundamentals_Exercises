import {router} from "./router.js";
import {refreshVisibilityNavBar} from "./DOM.js";

refreshVisibilityNavBar();

await router('Movies');

document.querySelector('nav')
    .addEventListener('click', async (e) => {
        if (e.target.tagName == 'A') {
            const path = e.target.textContent;

            await router(path);
        }
    });