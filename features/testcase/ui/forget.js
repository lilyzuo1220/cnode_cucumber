let {defineSupportCode} = require('cucumber')
let assert = require('assert')
let action = require('../../../UiAction/action')
let register_page = require('../../../common/pages/register_page')
let db = require('../../config/db')
defineSupportCode(function({Given,When,Then}){
    Given('导航到首页', async function () {
     await this.driver.get('http://localhost:3000');
      });
      let name,email
      When('注册新用户', async function () {
          name = Date.now();
          email = Date.now()+'@mailinator.com'
      await register_page.register_page(this.driver,name,'123456', '123456', email)
      });
   
      Then('点击忘记密码,输入刚注册的邮箱,返回提示信息{string}', async function (string) {
        await action.forget_pass(this.driver,email,'succeed',string)
      });
      Then('点击忘记密码,输入邮箱{string},返回提示信息{string}', async function (string, string2) {
       await action.forget_pass(this.driver,string,'failed',string2)
      });
})