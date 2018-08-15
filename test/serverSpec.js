  // TODO: Your code here
var http = require('http');
var assert = require('assert');
var server = require('../server/index.js');

	describe('Array', function() {
	  describe('#indexOf()', function() {
	    it('should return -1 when the value is not present', function() {
	      assert.equal([1,2,3].indexOf(4), -1);
	    });
	  });
	});

// 	describe('/', function () {
//   it('should return 200', function (done) {
//     http.get('http://localhost:1128', function (res) {
//       assert.equal(200, res.statusCode);
//       done();
//     });
//   });
// })

	this.server = http.createServer(function (req, res) {
	  res.writeHead(200, { 'Content-Type': 'text/plain' });
	  res.end('Hello, world!\n');
	});

	exports.listen = function () {
	  this.server.listen.apply(this.server, arguments);
	};

	exports.close = function (callback) {
	  this.server.close(callback);
	};

	describe('server', function () {
	  before(function () {
	    server.listen(1128);
	  });

	  after(function () {
	    server.close();
	  });
	});



	describe('/', function () {
	  it('should return 200', function (done) {
	    http.get('http://localhost:1128', function (res) {
	      assert.equal(200, res.statusCode);
	      done();
	    });
	  });

	  it('should say "Hello, world!"', function (done) {
	    http.get('http://localhost:1128', function (res) {
	      res.on('end', function () {
	        assert.equal('Hello, world!\n');
	      });
	    });
	    done();
	  });
	});

	








