const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 4 given 1 and 3 as argument', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
});

describe('calculateNumber', function () {
  it('should return 5 given 1 and 3.7 as argument', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
});

describe('calculateNumber', function () {
  it('should return 5 given 1.2 and 3.7 as argument', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
});

describe('calculateNumber', function () {
  it('should return 6 given 1.5 and 3.7 as argument', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
