import {html} from "../../../../../../node_modules/lit-html/lit-html.js";

export const catTemplate = (cat) => html`
    <li>
        <img src="./static/images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click="${(e) => onClick(e)}">Show status code</button>
            <div class="status" style="display: none" id="100">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`;

function onClick(e) {
    let statusElementStyle = e.currentTarget.parentNode.querySelector('.status').style;
    if (statusElementStyle.display == 'none') {
        statusElementStyle.display = 'block';
    } else {
        statusElementStyle.display = 'none';
    }
}