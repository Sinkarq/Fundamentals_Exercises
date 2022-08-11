const {chromium} = require('playwright');
const {expect} = require('chai');

const path = 'http://localhost:63342/Fundamentals_Exercises/Applications%20JS%20Exercises/05-Architecture%20&%20Testing/Exercise/01.Messenger/index.html?_ijt=i9ahp94a36uiqvb67joekrutab';

describe('Tests', async function () {
    let browser;
    let page;

    this.timeout(12000000);

    before(async () => {
        browser = await chromium.launch({headless: false, slowMo: 500});
    });

    after(async () => {
        browser = await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        page = await page.close();
    });

    it("Load messages", async function () {
        await page.goto(path);

        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == "GET"),
            await page.click('#refresh')
        ]);

        const response = await request.response();
        const body = await response.json();
        const messages = Object.values(body).map(v => `${v.author}: ${v.content}`).join('\n');


        await page.click('#refresh');
        const handle = await page.$eval('#messages', text => text.value);
        expect(handle).to.equal(messages);
    });

    it('send message', async function () {
        await page.goto(path);

        await page.fill('#author', "Author");
        await page.fill('#content', "Content");

        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == "POST"),
            await page.click('#submit')
        ]);

        const body = await request.postData();
        const expected = {"author": "Author", "content": "Content"};

        expect(body).to.equal(JSON.stringify(expected));
    });
});