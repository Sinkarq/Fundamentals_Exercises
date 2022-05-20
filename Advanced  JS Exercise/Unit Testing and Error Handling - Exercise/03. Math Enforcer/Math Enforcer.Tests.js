const mathEnforcer = require(`./Math Enforcer`).mathEnforcer;
const { expect } = require(`chai`);

describe(`Math enforcer tests`, () => {

    describe(`'addFive' tests`, () => {
        it(`Should return undefined if the input is not a number`, () => {
            expect(mathEnforcer.sum({})).to.be.undefined;
            expect(mathEnforcer.sum(`{}`)).to.be.undefined;
            expect(mathEnforcer.sum(null)).to.be.undefined;
            expect(mathEnforcer.sum(() => {})).to.be.undefined;
            expect(mathEnforcer.sum([])).to.be.undefined;
        });

        it(`Should return the number which is added 5 to it`, () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
            expect(mathEnforcer.addFive(-5.5)).to.equal(-0.5);
        });
    });

    describe(`'subtractTen' tests`, () => {
        it(`Should return undefined if the input is not a number`, () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(`{}`)).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(() => {})).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });

        it(`Should return the number which is subtracted with 10`, () => {
            expect(mathEnforcer.subtractTen(5.5)).to.equal(-4.5);
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(-10.1)).to.equal(-20.1);
        });
    });

    describe(`'sum' tests`, () => {
        it(`Should return undefined if first argument or second argument are not numbers`, () => {
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
            expect(mathEnforcer.sum(`{}`, 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, () => {})).to.be.undefined;
            expect(mathEnforcer.sum(null, [])).to.be.undefined;
        });

        it(`Should return the sum of the two numbers provided`, () => {
            expect(mathEnforcer.sum(69, 420)).to.equal(489);
            expect(mathEnforcer.sum(420, 69)).to.equal(489);
            expect(mathEnforcer.sum(-420, 69.420)).to.equal(-350.58);
            expect(mathEnforcer.sum(420.69, -69)).to.equal(351.69);

        });
    });
});
