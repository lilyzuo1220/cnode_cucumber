let { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ setDefaultTimeout }) {
    setDefaultTimeout(6000 * 10)
});



