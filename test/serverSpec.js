  // TODO: Your code here
var http = require('http');
var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
var server = require('../server/index.js');
let should = chai.should();
let Cat = require('../database/index.js')

	chai.use(chaiHttp);


	this.server = http.createServer(function (req, res) {
	  res.writeHead(200, { 'Content-Type': 'json/application' });
	  res.end();
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

	  // it('should say "Hello, world!"', function (done) {
	  //   http.get('http://localhost:1128', function (res) {
	  //     res.on('end', function () {
	  //       assert.equal('Hello, world!\n');
	  //     });
	  //   });
	  //   done();
	  // });
	});



	describe('Cats', () => {

	  	describe('/GET book', () => {
	      it('it should GET all the cats', (done) => {
	        chai.request(server)
	            .get('/cats')
	            .end((err, res) => {
	                res.should.have.status(200);
	                res.body.should.be.a('array');
	                res.body.length.should.be.eql(0);
	         		done();
	            });     
	      });

	  	});

	  	describe('/POST cat', () => {
	        it('it should not POST a book without pages field', (done) => {
		        let cat = {
		            catName : "caty",
		            ownerEmail : "3ogla@gmail.com",
		            imageUrl : "https://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
		            adoptionMessage : "Shit!" 
		        }
		        chai.request(server)
		            .post('/cats')
		            .send(cat)
		            .end((err, res) => {
		                res.should.have.status(200);
		                res.body.should.be.a('object');
		                res.body.should.have.property('errors');
		                res.body.errors.should.have.property('pages');
		                res.body.errors.pages.should.have.property('kind').eql('required');
		              done();
		            });
		          done();   
	        });

	   });

	});







