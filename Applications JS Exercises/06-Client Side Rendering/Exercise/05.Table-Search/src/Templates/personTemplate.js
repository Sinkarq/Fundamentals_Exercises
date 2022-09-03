import {html} from "../../../../../../node_modules/lit-html/lit-html.js";

export const personTemplate = (person) => html`
    <tr>
        <td>${person.firstName} ${person.lastName}</td>
        <td>${person.email}</td>
        <td>${person.course}</td>
    </tr>
`;

export const selectedPersonTemplate = (person) => html`
    <tr class="select">
        <td>${person.firstName} ${person.lastName}</td>
        <td>${person.email}</td>
        <td>${person.course}</td>
    </tr>
`;

export const bodyTemplate = (people, input) => html`
    ${people.map(person => {
        if (JSON.stringify(person).includes(input)) {
            return selectedPersonTemplate(person)
        }
        else {
            return personTemplate(person);
        }
    })}
`;