import {html, render, nothing} from "../../node_modules/lit-html/lit-html.js";
import {containerElement, getUserId} from "../misc.js";
import {Endpoints} from "../API/Endpoints.js";
import page from "//unpkg.com/page/page.mjs";


export const detailsPage = async (ctx) => {
    const id = ctx.params.id;
    const furniture = await Endpoints.furnitureDetails(id);

    render(detailsPageView(furniture), containerElement);
};

const detailsPageView = (furniture) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${furniture.img.slice(1)}"/>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${furniture.make}</span></p>
            <p>Model: <span>${furniture.model}</span></p>
            <p>Year: <span>${furniture.year}</span></p>
            <p>Description: <span>${furniture.description}</span></p>
            <p>Price: <span>${furniture.price}</span></p>
            ${furniture.material ? html`<p>Material: <span>${furniture.material}</span></p>` : html`<p>Material: <span>Not specified</span>
            </p>`}
            <div>
                ${furniture._ownerId == getUserId() ?
                        html`
                            <a href="/edit/${furniture._id}" class="btn btn-info">Edit</a>
                            <a @click="${async (e) => await onClick(e, furniture._id)}" href=”#”
                               class="btn btn-red">Delete</a>`
                        : nothing}
            </div>
        </div>
    </div>
`;

const onClick = async (e, id) => {
    e.preventDefault();

    await Endpoints.deleteFurniture(id);
    page.redirect('/home');
};