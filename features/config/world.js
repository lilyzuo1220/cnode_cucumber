
require('chromedriver')
let {defineSupportCode} = require('cucumber')
let {Builder} = require('selenium-webdriver')
let customWorld = function(){
    this.driver = new Builder().forBrowser('chrome').build();
}
defineSupportCode(function({setWorldConstructor}){
   setWorldConstructor(customWorld)
})