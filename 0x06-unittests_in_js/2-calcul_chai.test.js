const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', function () {
  it('should return 6 given SUM, 1.4 and 4.5 as argument', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
});

describe('calculateNumber', function () {
  it('should return -4 given SUBTRACT, 1.4 and 4.5 as argument', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
});

describe('calculateNumber', function () {
  it('should return 0.2 given DIVIDE, 1.4 and 4.5 as argument', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
});

describe('calculateNumber', function () {
  it('should return 6 given Error, 1.4 and 0 as argument', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
