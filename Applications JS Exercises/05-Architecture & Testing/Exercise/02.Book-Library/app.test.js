const {chromium} = require('playwright');
const {expect} = require('chai');

const path = 'http://localhost:63342/Fundamentals_Exercises/Applications%20JS%20Exercises/05-Architecture%20&%20Testing/Exercise/02.Book-Library/index.html?_ijt=uehqjrf6k8h1mhbp246oj68rh2';
const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
        "author": "J.K.Rowling",
        "title": "Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": {"author": "Svetlin Nakov", "title": "C# Fundamentals"}
};

let browser;
let page;

describe('E2E tests', async function () {
    this.timeout(120000);

    before(async () => {
        browser = await chromium.launch({headless: false, slowMo: 1000});
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });

    it('load books', async () => {
        await page.route('**/jsonstore/collections/books', (route, request) => {
            route.fulfill({
                body: JSON.stringify(mockData),
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
        });

        await page.goto(path);

        await page.click('text=Load all books');
        await page.waitForSelector('text=Harry Potter');
        const rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent));

        expect(rowData[0]).to.contains('Harry Potter');
        expect(rowData[0]).to.contains('Rowling');
        expect(rowData[1]).to.contains('C# Fundamentals');
        expect(rowData[1]).to.contains('Nakov');
    });

    it('creates book', async () => {
        await page.goto(path);

        await page.fill('input[name=title]', 'Title');
        await page.fill('input[name=author]', 'Author');

        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'POST'),
            page.click('text=Submit')
        ]);
        const data = JSON.parse(request.postData());
        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author');
    });

    it('edit book', async () => {
        await page.route('**/jsonstore/collections/books', (route, request) => {
            route.fulfill({
                body: JSON.stringify(mockData),
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
        });

        await page.goto(path);

        await page.click('text=Load all books');
        await page.waitForSelector('text=Harry Potter');

        await page.click('[data-id="d953e5fb-a585-4d6b-92d3-ee90697398a0"] .editBtn');

        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'PUT'),
            page.click('text=save')
        ]);

        const expectedBody = {
            title: "Harry Potter and the Philosopher's Stone",
            author: 'J.K.Rowling'
        };
        const data = JSON.stringify(request.postData());
        expect(data).to.contain(expectedBody.title);
        expect(data).to.contain(expectedBody.author);
    });

    it.only('deletes book', async () => {
        await page.route('**/jsonstore/collections/books', (route, request) => {
            route.fulfill({
                body: JSON.stringify(mockData),
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
        });

        await page.goto(path);

        await page.click('text=Load all books');
        await page.waitForSelector('text=Harry Potter');

        page.on('dialog', dialog => dialog.accept());

        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'DELETE'),
            page.click('[data-id="d953e5fb-a585-4d6b-92d3-ee90697398a0"] .deleteBtn')
        ]);

        expect(request.url()).to.contain('d953e5fb-a585-4d6b-92d3-ee90697398a0');
    });
});