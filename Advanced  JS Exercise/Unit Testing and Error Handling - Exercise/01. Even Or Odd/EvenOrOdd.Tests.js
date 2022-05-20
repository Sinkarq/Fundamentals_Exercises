const isOddOrEven = require(`./EvenOrOdd`);
const { expect } = require('chai');

describe('isOddOrEven function tests ', () => {
    it('Should return undefined if the input is NOT a string', () => {
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
    });

    it('Should return even if the string input length is even', () => {
        expect(isOddOrEven(`MM`)).to.equal(`even`);
        expect(isOddOrEven(`MMmm`)).to.equal(`even`);
        expect(isOddOrEven(`MMmmMMmm`)).to.equal(`even`);
        expect(isOddOrEven(`MMmmMMmmMMmmMMmmMMmmMM`)).to.equal(`even`);
    });

    it('Should return odd if the string input length is odd', () => {
        expect(isOddOrEven(`MM_`)).to.equal(`odd`);
        expect(isOddOrEven(`MMmm_`)).to.equal(`odd`);
        expect(isOddOrEven(`MMmmMMmm_`)).to.equal(`odd`);
        expect(isOddOrEven(`MMmmMMmmMMmmMMmmMMmmMM_`)).to.equal(`odd`);
    });
});