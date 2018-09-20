@login
Feature: Login function Test
    注册功能测试
    负责人：lily
    时间2017-11-18
Background:导航到登录页面
    Given 导航到登录页面
@1
Scenario:登录成功,然后跳转到首页
    Then 用户名输入'llzuo',密码输入'lzuo123456',登录成功,用户名显示'llzuo'

@2
Scenario Outline: 不同场景下的登录
    Then 用户名输入"<username>", 密码输入'<pass>',登录失败,显示错误提示信息'<errormessage>'
    Examples:
    |username|pass|errormessage|
    |        |    |信息不完整。|
    |        |123456|信息不完整。|
    |llzuo   |    |信息不完整。|
    |llzuo   |12345|用户名或密码错误|
    |zuol    |lzuo123456|用户名或密码错误|


    





    