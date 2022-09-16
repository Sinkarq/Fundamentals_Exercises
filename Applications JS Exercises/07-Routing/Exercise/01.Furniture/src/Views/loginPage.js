import {html, render} from "../../node_modules/lit-html/lit-html.js";
import {containerElement, setAccessToken} from "../misc.js";
import {identityEndpoints} from "../API/Endpoints.js";
import page from "//unpkg.com/page/page.mjs";

export const loginPage = () => render(loginPageView(), containerElement);

const loginPageView = () => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
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
                <input type="submit" class="btn btn-primary" value="Login"/>
            </div>
        </div>
    </form>
`;

const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const {email, password} = Object.fromEntries(formData);

    const result = await identityEndpoints.login(email, password);
    const accessToken = result.accessToken;

    setAccessToken(accessToken, result._id);

    page.redirect('/');
};