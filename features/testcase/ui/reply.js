let { defineSupportCode } = require('cucumber')
let assert = require('assert')
let action = require('../../../UiAction/action')
let login = require('../../../common/pages/login_page')
defineSupportCode(function ({ Given, When, Then }) {
    Given('回复话题前请登录', async function () {
        await login.login_page(this.driver,'llzuo','lzuo123456')
    });

    Then('{string}回复话题。传入是否上传链接的值{string},是否上传图片的值{string},回复的内容{string},回复后的状态{string}', async function (string, string2, string3, string4, string5) {
        await action.reply_topic(this.driver, string, string2, string3, string4, string5)
    });

    Then('从{string}回复话题。没有输入任何内容就回复话题,显示错误提示信息{string}', async function (string, string2) {
        await action.reply_topic(this.driver, string, 'false', 'false', '', 'failed', string2)
    });

    //   When('首页没有话题可以分享', async function () {
    //    return await assert.ifError(this.driver.findElement({css:'#topic_list > div:nth-child(1) > div > a'}))

    //   });
    Then('发布新的话题,tab选择{string},title是{string},不上传hyperlink {string},不上传图片{string},内容传入{string},发帖成功{string}', async function (string, string2, string3, string4, string5, string6) {
        await this.driver.findElement({ id: 'create_topic_btn' }).click();
        await action.publish_topic(this.driver, string, Date.now() + string2, string3, string4, Date.now() + string5, string6)

    });
    Then('回复新话题,上传链接的值{string},上传图片的值{string},回复的内容{string},回复后的状态{string}', async function (string, string2, string3, string4) {
        // await this.driver.get('http://localhost:3000')
        // await this.driver.sleep(1000)
        await action.reply_topic(this.driver, '', string, string2, string3, string4)
    });

})