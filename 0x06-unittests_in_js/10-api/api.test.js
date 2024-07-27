const { expect } = require('chai');
const request = require('request');

describe('App index page', function () {
  it('should return status code 200', function (done) {
    request.get('http://localhost:7865', function (error, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return correct result', function (done) {
    request.get('http://localhost:7865', function (error, res, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('App /cart/:id endpoint', function () {
  it('should return 200 status when id is a number', function(done) {
    request('http://localhost:7865/cart/23', function (error, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 23');
      done();
    });
  });
});

describe('App /cart/:id endpoint', function () {
  it('should return status 404 when id is not a number', function (done) {
    request.get('http://localhost:7865/cart/nan', function (error, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('App /login endpoint', function () {
  it('should return Welcome Betty', function (done) {
    const obj = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'Betty'
      }
    };
    request.post(obj, function (error, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.contain('Welcome Betty');
      done();
    });
  });
});

describe('App /available_payments endpoint', function () {
  it('should ...', function (done) {
    request.get('http://localhost:7865/available_payment', function (error, res, body) {
      expect(res.statusCode).to.equal(200;
      done();
    });
  });
});
