var should = require('chai').should();

describe('Acos Server', () => {

  describe('Acos frontpage', () => {
    browser.url('/');

    it('should load and display title', () => {
      browser.getTitle().should.equal('ACOS Server');
    });

    it('should display installed tools', () => {
      let items = browser.$$('#installed_tools a').map(a => a.getText());
      items.should.include('logging-keygenerator');
    });

    it('should display installed protocols', () => {
      let items = browser.$$('#installed_protocols li').map(li => li.getText());
      items.should.include('html');
    });

    it('should display installed content types', () => {
      let items = browser.$$('#installed_content_types li').map(li => li.getText());
      items.should.include('annotated');
    });

    it('should display installed content packages', () => {
      let items = browser.$$('.contentPackage').map(p => p.$('.packageTitle').getText());
      items.should.include('annotated-demo');
    });

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
