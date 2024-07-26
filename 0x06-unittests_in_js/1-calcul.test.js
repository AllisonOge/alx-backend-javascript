const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should return 6 given SUM, 1.4 and 4.5 as argument', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
});

describe('calculateNumber', function () {
  it('should return -4 given SUBTRACT, 1.4 and 4.5 as argument', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
});

describe('calculateNumber', function () {
  it('should return 0.2 given DIVIDE, 1.4 and 4.5 as argument', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
});

describe('calculateNumber', function () {
  it('should return 6 given Error, 1.4 and 0 as argument', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
