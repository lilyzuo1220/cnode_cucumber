let { defineSupportCode } = require('cucumber')
defineSupportCode(function ({ Given, When, Then }) {
    Given('登录页面', async function () {
        await this.driver.get('http://localhost:3000/signup')
    });
    When('输入注册信息', async function (dataTable) {
        /* console.log('rawTable',dataTable.rawTable) dataTable.rawTable是一个二维数组
        rawTable [ [ 'username', 'pass', 'repass', 'email' ],[ '1117', '1234567', '1234567', '1117@mailinator.com' ] ]
        console.log('data',JSON.stringify(dataTable) )
        JSON.parse(str) 字符串转为jason对象 {"name":"xiaoming","age":23} ==> a = {name:"xiaoming",age:"23"}
        JSON.stringify()用于从一个对象解析出字符串 a = {a:1,b:2} ==> {"a":1,"b":2}
        */
        await this.driver.findElement({ id: "loginname" }).sendKeys(dataTable.rawTable[1][0]);
        await this.driver.findElement({ id: "pass" }).sendKeys(dataTable.rawTable[1][1]);
        await this.driver.findElement({ id: "re_pass" }).sendKeys(dataTable.rawTable[1][2])
        await this.driver.findElement({ id: "email" }).sendKeys(dataTable.rawTable[1][3]);
    });
    Then('点击注册', async function () {
        await this.driver.findElement({ css: ".span-primary" }).click();
    });
})