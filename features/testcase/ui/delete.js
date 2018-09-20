let {defineSupportCode} =  require('cucumber')
let assert = require('assert')
let action = require('../../../UiAction/action')
let login = require('../../../common/pages/login_page')

defineSupportCode(function({Given,When,Then}){
    // Given('删除话题前导航到首页', function (callback) {
    //     // Write code here that turns the phrase above into concrete actions
    //     callback(null, 'pending');
    //   });
      When('登录', async function () {
       await login.login_page(this.driver,'llzuo','lzuo123456')
      });

      Then('导航到删除topic页面,删除话题', async function () {
        await action.topic_delete(this.driver)
      });

})