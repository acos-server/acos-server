# Introduction

Acos features browser tests using WebDriverIO. Quick steps to setup testing
environment and run tests:

  1. If `npm install` correctly installed `devDependencies` you are good to run
    tests inside Chrome browser. Else look into Configuring Tests section.
  2. Start Acos server
    `node bin/www`
  3. Run tests in Acos folder:
    `./node_modules/.bin/wdio`

You can also run individual tests/suites, e.g.
`./node_modules/.bin/wdio --mochaOpts.grep 'ps_hello'`
would run tests that match with `ps_hello`.

For more detailed on getting started with WebDriverIO,
see https://webdriver.io/docs/gettingstarted.html

# Configuring Tests

WebDriverIO CLI handles configuring and installing dependencies. Simply:

  1. Install wdio CLI: `npm install @wdio/cli`
  2. Interactive configuration: `./node_modules/.bin/wdio config`

Required settings are the testing framework `mocha`,
running synchronously `sync`
and the base url `http://localhost:3000`.

Running the config command will override configuration in `wdio.conf.js`.
The preprepared config in ACOS repository finds test suites from project root
(`./tests/*.js`) and from any ACOS packages (`./node_modules/acos-*/tests/*.js`).
This can be altered in `specs` array in the `wdio.conf.js` file.

# Writing Tests

Examples of written tests can be found in `acos-jsparsons-python` module. For
WebDriverIO details refer to the [WebDriverIO API Docs](https://webdriver.io/docs/api.html).
