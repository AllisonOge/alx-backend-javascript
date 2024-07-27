const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber', function () {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(spy, 'The total is: 10');

    stub.restore();
    spy.restore();
  });
});