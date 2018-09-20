let {defineSupportCode} = require('cucumber')
let assert = require('assert')
let action = require('../../../UiAction/action')
defineSupportCode(function({Given,When,Then}){
    Given('导航到登录页面', function () {
        this.driver.get('http://localhost:3000');
        this.driver.findElement({xpath:'/html/body/div[1]/div/div/ul/li[6]/a'}).click();
    });
    Then('用户名输入{string},密码输入{string},登录成功,用户名显示{string}', async function (string, string2, string3) {
       await action.userlogin(this.driver,string, string2, string3)
    });
    Then('用户名输入{string}, 密码输入{string},登录失败,显示错误提示信息{string}', async function (string, string2, string3) {
       await action.userlogin(this.driver,string, string2, string3,'failed')
    });

})