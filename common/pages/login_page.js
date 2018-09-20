let login = require('../element/login')
let url = require('../baseurl/url')
let login_page = async function (driver,name,pass) {
    await driver.get(url.home_page)
    await driver.findElement(login.link).click();
    await driver.findElement(login.name).sendKeys(name);
    await driver.findElement(login.pass).sendKeys(pass);
    await driver.findElement(login.submit).click();
}
exports.login_page = login_page;