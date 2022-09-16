import {refreshNavbarState} from "../app.js";
import {html, render} from "../../node_modules/lit-html/lit-html.js";
import {containerElement, getUserId} from "../misc.js";
import {Endpoints} from "../API/Endpoints.js";

export const myPage = async () => {
    refreshNavbarState();

    const furnitures = await Endpoints.getUserFurniture(getUserId());

    render(myPageView(furnitures), containerElement);
};

export const myPageView = (furnitures) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${furnitures.map(x => furnitureTemplate(x.img, x.description, x.price))}
    </div>
`;

export const furnitureTemplate = (img, description, price) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${img}"/>
                <p>${description}</p>
                <footer>
                    <p>Price: <span>${price} $</span></p>
                </footer>
                <div>
                    <a href="#" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
`;