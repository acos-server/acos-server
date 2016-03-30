describe('Acos Server', function() {
  describe('Acos frontpage', function() {
    it('should load and display title', function() {
      return browser
        .url('http://localhost:3000')
        .getTitle().should.eventually.be.equal('ACOS Server');
    });
    
    it('should display installed tools');
  });
  
});

/*
process.env.NODE_ENV = 'test';
process.env.PORT = 3001;

var app = require('../app');
var http = require('http');
var Browser = require('zombie');
var assert = require('assert');


describe('front page', function() {

  before(function() {
    this.server = http.createServer(app).listen(3001);
    this.browser = new Browser({ site: 'http://localhost:3001' });
  });

  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('should load without errors', function() {
    assert.ok(this.browser.success);
  });

  it('should list available tools', function() {
     assert.equal(this.browser.text('#installed_tools'), 'jsparsons-generator python-parser');
  });
  
  it('should list available protocols', function() {
     assert.equal(this.browser.text('#installed_protocols'), 'aplus html pitt lti');
  });  

  after(function(done) {
    this.server.close(done);
  });

});

*/