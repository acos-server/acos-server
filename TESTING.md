# Introduction

Acos features browser tests using WebDriverIO. Quick steps to setup testing
environment and run tests:

  1. Install WebDriverIO: `npm install webdriverio`
  2. Install Selenium server from http://docs.seleniumhq.org/download/
  3. Run Selenium server:
    `java -jar /path/to/selenium-server-standalone-2.XX.X.jar`
  4. Install webdrivers for the desired browsers, e.g. [Chrome webdriver](https://sites.google.com/a/chromium.org/chromedriver/downloads)
  5. Start Acos server `node bin/www`
  6. Run tests in Acos folder:
    `./node_modules/webdriverio/bin/wdio wdio.conf.js`

You can also run individual tests/suites, e.g.
`wdio wdio.conf.js --mochaOpts.grep 'ps_hello'` would run tests that match with
`ps_hello`

For more detailed on getting started with WebDriverIO,
see http://webdriver.io/guide/getstarted/install.html

# Configuring Tests

Configuration for tests is found in `wdio.conf.js`. The most relevant settings
are the `baseUrl` (default `http://localhost:3000`) and `capabilities` that
defines the browser to use (by default Chrome).

By default, all files ending in `.js` that are contained in the tests
directory in the root of the project are run. If you want to run tests for
all ACOS-related packages uncomment line: `./node_modules/acos*/tests/*.js`.

# Writing Tests

Examples of written tests can be found in `acos-jsparsons-python` module. For
WebDriverIO details refer to the [WebDriverIO API Docs](http://webdriver.io/api.html).
