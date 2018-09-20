let { defineSupportCode } = require('cucumber')
let assert = require('assert')
let action = require('../../../UiAction/action')
let login = require('../../../common/pages/login_page')
defineSupportCode(function ({ Given, When, Then }) {
  Given('登录后导航到发布话题页面', async function () {
    await login.login_page(this.driver, 'llzuo', '123456')
    await this.driver.findElement({ id: 'create_topic_btn' }).click();
  });

  Then('板块选择{string},标题输入{string},上传超链接{string},上传照片{string},输入内容{string}', async function (string, string2, string3, string4, string5) {
    await action.publish_topic(this.driver, string, string2, string3, string4, string5, 'success')
  });

  Then('title和内容分别是空的时候发布话题。板块选择{string},标题输入{string},输入内容{string},显示错误提示信息{string}', async function (string, string2, string3, string4) {
    await action.publish_topic(this.driver, string, string2, 'false', 'false', string3, 'failed', string4)
  });

  Then('板块为空时发布话题。板块选择{string},标题输入{string},输入内容{string},显示错误提示信息{string}', async function (string, string2, string3, string4) {
    await action.publish_topic(this.driver, string, string2, 'false', 'false', string3, 'tabError', string4)
  });
})