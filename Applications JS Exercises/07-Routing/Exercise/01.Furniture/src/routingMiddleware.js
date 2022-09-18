import {render} from '../node_modules/lit-html/lit-html.js';

const root = document.getElementById('container');
const _render = (template) => render(template, root);

export const routingMiddleware = (ctx, next) => {
    ctx.render = _render;
    next();
};