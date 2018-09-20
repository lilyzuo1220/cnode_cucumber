let assert = require('assert')
let path = require('path')
let imagepath = path.join(__dirname, '../common/image/agent.jpg');

let login = require('../common/element/login')
let register = require('../common/element/register')
let share = require('../common/element/topic')
let reply = require('../common/element/reply')
let forget =  require('../common/element/forget')
//???把detele_topic 换成delete会报错
let delete_topic = require('../common/element/delete')

//登录
let userlogin = async function (driver, username, password, message, status) {
    await driver.findElement(login.name).sendKeys(username)
    await driver.findElement(login.pass).sendKeys(password)
    await driver.findElement(login.submit).click();
    //登录失败时比较errortip是否正确，登录成功后用户信息是否显示正确
    if (status == 'failed') {
        let errtip = await driver.findElement(login.error_tip).getText();
        console.log('errortip', errtip)
        return assert.deepEqual(errtip.replace('×\n', ''), message);
    } else {
        let userinfo = await driver.findElement(login.username).getText();
        console.log('userinfo', userinfo)
        return assert.deepEqual(userinfo, username)
    }
}

//注册
let userregister = async function (driver, username, pass, re_pass, email, message, status) {
    await driver.findElement(register.name).sendKeys(username);
    await driver.findElement(register.pass).sendKeys(pass);
    await driver.findElement(register.re_pass).sendKeys(re_pass);
    await driver.findElement(register.email).sendKeys(email);
    await driver.findElement(register.submit).click();
    //注册失败时比较errortip是否正确，注册成功后验证提示信息是否显示正确
    if (status == 'failed') {
        let register_error = await driver.findElement(register.error_tip).getText();
        console.log('errortip', register_error)
        return assert.deepEqual(register_error.replace('×\n', ''), message);
    } else {
        let register_success = await driver.findElement(register.success_tip).getText();
        console.log('successinfo', register_success)
        return assert.deepEqual(register_success, message)
    }
}

// 发布话题
let publish_topic = async function (driver, tab, title, hyperlink, image, content, status, message) {
    switch (tab) {
        case '请选择':
            await driver.findElement(share.tab_select).click();
            break;
        case '分享':
            await driver.findElement(share.share_tab).click();
            break;
        case '问答':
            await driver.findElement(share.ask).click();
            break;
        case '招聘':
            await driver.findElement(share.job).click();
            break;
        default:
            break;
    }
    await driver.findElement(share.title).sendKeys(title)
    //如果传递的hyperlink不是空的话 执行上传hyperlink的动作
    if (hyperlink == 'true') {
        await driver.findElement(share.hyperlink).click()
        await driver.sleep(1000)
        await driver.findElement(share.hyperlink_title).sendKeys('test')
        await driver.findElement(share.hyperlink_adress).sendKeys('www.baidu.com')
        await driver.findElement(share.hyperlink_submit).click()
        await driver.sleep(2000);
    }
    if (image == 'true') {

        await driver.findElement(share.image).click()
        await driver.findElement(share.image_upload).sendKeys(imagepath);
        await driver.sleep(2000);
    }
    //获得输入框焦点
    await driver.findElement(share.content).click()
    //输入content
    let topic_content = await driver.findElement(share.contentEditor)
    await driver.actions().mouseMove(topic_content).sendKeys(content).perform();
    await driver.findElement(share.submit).click()
    if (status == 'success') {
        let topic_title = await driver.findElement(share.topic_title).getText()
        return assert.deepEqual(topic_title, title)
    } else if (status == 'tabError') {
        let tabError = await driver.switchTo().alert().getText();
        return assert.deepEqual(tabError, message)
        //下面注释的代码是关掉alert
        //await driver.switchTo().alert().accept()
    } else {
        let errormessage = await driver.findElement(share.errortip).getText()
        //把报错信息里面的x\n 去掉再去比较
        return assert.deepEqual(errormessage.replace('×\n', ''), message)
    }
}

//回复话题
let reply_topic = async function (driver, page, hyperlink, image, content, status, message) {
    let upload_title = Date.now();
    let upload_address = 'www.baidu.com';
    //判断是回复home page的topic还是新建的topic
    if (page == 'homepage') {
        await driver.findElement(reply.link).click();
        await driver.sleep(2000)
    }
    //上传链接
    if (hyperlink == 'true') {
        await driver.findElement(reply.hyperlink).click();
        await driver.sleep(1000)
        await driver.findElement(reply.hyperlink_title).sendKeys(upload_title)
        await driver.findElement(reply.hyperlink_address).sendKeys(upload_address)
        await driver.findElement(reply.hyperlink_submit).click()
        await driver.sleep(1000)
    }
    //上传图片
    if (image == 'true') {
        await driver.findElement(reply.image).click();
        await driver.findElement(reply.upload_image).sendKeys(imagepath)
        await driver.sleep(1000)
    }
    //添加回复内容，首先必须要先获得输入框的焦点
    await driver.findElement(reply.content).click();
    //把光标移入输入框
    let editor = await driver.findElement(reply.contentEditor)
    await driver.actions().mouseMove(editor).sendKeys(content).perform();
    await driver.findElement(reply.replyBtn).click();
    await driver.sleep(1000)
    //回帖成功后比较真实的回帖内容与发送的回帖内容
    if (status == 'succeed') {
        let reply_content = await driver.findElement(reply.successMsg).getText();
        if (hyperlink == 'true') {
            await assert.deepEqual(reply_content, upload_title + content)
        } else {
            await assert.deepEqual(reply_content, content)
        }
    } else {
        let err_message = await driver.findElement(reply.errorMsg).getText();
        await assert.deepEqual(err_message, message)
    }
}

//忘记密码
let forget_pass =  async function(driver,email,status,message){
    await driver.findElement(forget.login).click();
    await driver.findElement(forget.link).click();
    await driver.findElement(forget.email).sendKeys(email);
    await driver.findElement(forget.submit).click()
    if (status == 'succeed'){
        let suc_message = await driver.findElement(forget.succeed_message).getText()
        console.log(suc_message)
        await assert.deepEqual(suc_message,message)
    }else{
        let err_message = await driver.findElement(forget.error_message).getText()
        await assert.deepEqual(err_message.replace('×\n',''),message)
    }
}
let topic_delete = async function(driver){
    await driver.findElement(delete_topic.link).click();
    await driver.findElement(delete_topic.icon).click();
    let confirm_text = await driver.switchTo().alert().getText();
    let message = '确定要删除此话题吗？'
    await assert.deepEqual(confirm_text,message)
    await driver.switchTo().alert().accept();
    await driver.sleep(1000)
    let url = await driver.getCurrentUrl()
    let home_page = 'http://localhost:3000/'
    await assert.deepEqual(url,home_page)
}




//与mongodb数据库相关的动作

exports.userlogin = userlogin;
exports.userregister = userregister;
exports.publish_topic = publish_topic;
exports.reply_topic = reply_topic;
exports.forget_pass = forget_pass;
exports.topic_delete = topic_delete;