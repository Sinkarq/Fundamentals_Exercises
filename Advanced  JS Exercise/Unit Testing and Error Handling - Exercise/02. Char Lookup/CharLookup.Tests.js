const lookupChar = require('./Char Lookup');
const { expect } = require('chai');

describe('Char look up function tests', () => {
   it('Should return undefined if the first argument is not string and the second is not integer', () => {
      expect(lookupChar({}, {})).to.be.undefined;
      expect(lookupChar(() => {}, () => {})).to.be.undefined;
      expect(lookupChar(null, 1)).to.be.undefined;
      expect(lookupChar(`string`, `string`)).to.be.undefined;
      expect(lookupChar(`string`, 1.5)).to.be.undefined;
      expect(lookupChar(1.5, 1.5)).to.be.undefined;
   });

   it(`It should return 'Incorrect index' if the index is bigger than the string length or negative number`, () => {
      expect(lookupChar("Sinan", -1)).to.equal('Incorrect index');
      expect(lookupChar("Sinan", -1000)).to.equal('Incorrect index');
      expect(lookupChar("Sinan", "Sinan".length)).to.equal('Incorrect index');
      expect(lookupChar("Sinan", "Sinan".length + 1)).to.equal('Incorrect index');
      expect(lookupChar("Sinan", "Sinan".length + 1000)).to.equal('Incorrect index');
   });

   it(`It should return the correct char of the provided string with the correct index`, () => {
      expect(lookupChar("Sinan", 0)).to.equal('S');
      expect(lookupChar("Sinan", 1)).to.equal('i');
      expect(lookupChar("Sinan", 2)).to.equal('n');
      expect(lookupChar("Sinan", 3)).to.equal('a');
      expect(lookupChar("Sinan", 4)).to.equal('n');

   })
});