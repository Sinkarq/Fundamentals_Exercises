import {html, render} from "../../node_modules/lit-html/lit-html.js";
import {containerElement, throwException} from "../misc.js";
import {identityEndpoints} from "../API/Endpoints.js";
import page from "//unpkg.com/page/page.mjs";

export const registerPage = () => render(registerPageView(), containerElement);

const registerPageView = () => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${async (e) => await onSubmit(e)}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class="form-control" id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register"/>
            </div>
        </div>
    </form>
`;

const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const {email, password, rePass} = Object.fromEntries(formData);

    if (password != rePass) {
        throwException("The repeated password field is invalid.");
    }

    await identityEndpoints.register(email, password);

    page.redirect('/users/login');
};