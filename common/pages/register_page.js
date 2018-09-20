let register = require('../element/register')
let url = require('../baseurl/url')
let register_page = async function(driver,username,pass,re_pass,email){
    await driver.get(url.home_page)
    await driver.findElement(register.link).click()
    await driver.findElement(register.name).sendKeys(username);
    await driver.findElement(register.pass).sendKeys(pass);
    await driver.findElement(register.re_pass).sendKeys(re_pass);
    await driver.findElement(register.email).sendKeys(email);
    await driver.findElement(register.submit).click();
}
exports.register_page = register_page