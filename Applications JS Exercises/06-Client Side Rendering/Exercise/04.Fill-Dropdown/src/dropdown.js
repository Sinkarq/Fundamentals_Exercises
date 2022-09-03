import {submitHandler} from "./Handlers/submitHandler.js";
import {renderOptions} from "./rendering.js";

await renderOptions();

const submitButton = document.querySelector('[type="submit"]');
submitButton.addEventListener('click', submitHandler);

