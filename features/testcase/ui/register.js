let { defineSupportCode } = require('cucumber')
let assert = require('assert')
let action = require('../../../UiAction/action')
let active = require('../../config/db')
let login = require('../../../common/pages/login_page')
defineSupportCode(function ({ Given, When, Then }) {
  Given('导航到注册页面', function () {
    this.driver.get('http://localhost:3000')
    return this.driver.findElement({ xpath: '/html/body/div[1]/div/div/ul/li[5]/a' }).click();
  });
  let name, email;
  Then('输入用户名,密码输入{string},确认密码输入{string},输入邮箱,注册成功显示{string}', async function (string, string2, string3) {
    name = Date.now();
    email = name + '@mailinator.com'
    await action.userregister(this.driver, name, string, string2, email, string3)
  });
  Then('激活用户后可以正常登录', async function () {
    await active.activeuser(name)
    await login.login_page(this.driver, name, '123456')
  });
  Then('用户名和邮箱是变量.输入用户名,密码输入{string},确认密码输入{string},输入邮箱,提交后应该收到{string}', async function (string, string2, string3) {
    await action.userregister(this.driver, Date.now(), string, string2, Date.now() + '@mailinator.com', string3, 'failed')
  });
  Then('输入为空或者已注册的用户名,用户名输入{string},密码输入{string},确认密码输入{string},输入带有时间戳的邮箱,提交后应该收到{string}', async function (string, string2, string3, string4) {
    await action.userregister(this.driver, string, string2, string3, Date.now() + '@mailinator.com', string4, 'failed')
  });

  Then('输入用户名少于最小值字符,密码输入{string},确认密码输入{string},输入带有时间戳的邮箱,提交后应该收到{string}', async function (string, string2, string3) {
    await action.userregister(this.driver, String(Date.now()).slice(9), string, string2, Date.now() + '@mailinator.com', string3, 'failed')
  });
  Then('输入不合法的email。输入带有时间戳的用户名,密码输入{string},确认密码输入{string},邮箱输入{string},提交后应该收到{string}', async function (string, string2, string3, string4) {
    await action.userregister(this.driver, Date.now(), string, string2, string3, string4, 'failed')
  });

})



