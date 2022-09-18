import {html} from "../../node_modules/lit-html/lit-html.js";
import {validator} from "../misc.js";
import {Endpoints} from "../API/Endpoints.js";
import page from "//unpkg.com/page/page.mjs";

export const editPage = async (ctx) => {
    const id = ctx.params.id;
    const furniture = await Endpoints.furnitureDetails(id);

    ctx.render(editPageView(furniture));
};

const editPageView = (furniture) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${async (e) => await onSubmit(e, furniture._id)}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input @input="${(e) => validator.must_be_4_long(e.currentTarget)}" class="form-control is-valid"
                           id="new-make" type="text" name="make" value="${furniture.make}">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input @input="${(e) => validator.must_be_4_long(e.currentTarget)}" class="form-control is-valid"
                           id="new-model" type="text" name="model"
                           value="${furniture.model}">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input @input="${(e) => validator.must_be_between_1950_2050(e.currentTarget)}"
                           class="form-control is-valid"
                           id="new-year" type="number" name="year"
                           value="${furniture.year}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input @input="${(e) => validator.must_be_more_than_10(e.currentTarget)}"
                           class="form-control is-valid"
                           id="new-description" type="text" name="description"
                           value="${furniture.description}">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input @input="${(e) => validator.must_be_positive_number(e.currentTarget)}"
                           class="form-control is-valid"
                           id="new-price" type="number" name="price" value="${furniture.price}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input @input="${(e) => validator.must_not_be_empty(e.currentTarget)}" class="form-control is-valid"
                           id="new-image" type="text" name="img" value="${furniture.img}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material"
                           value="${furniture.material}">
                </div>
                <input type="submit" class="btn btn-info" value="Edit"/>
            </div>
        </div>
    </form>
`;

const onSubmit = async (e, id) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const {make, model, year, description, price, img, material} = Object.fromEntries(formData);

    const nz = await Endpoints.updateFurniture(id, make, model, year, description, price, img, material);
    console.log(nz);

    page.redirect('/home');
};