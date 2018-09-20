@forget
Feature: forget password
    Author:Lily
    Date:2017-12-22
Background:导航到首页
    Given 导航到首页 

Scenario:注册新用户之后使用该用户忘记密码成功
    When 注册新用户
    Then 点击忘记密码,输入刚注册的邮箱,返回提示信息'我们已给您填写的电子邮箱发送了一封邮件，请在24小时内点击里面的链接来重置密码。'

Scenario Outline: 输入不合法的邮箱,forget password失败
    Then 点击忘记密码,输入邮箱'<email>',返回提示信息'<message>'
    Examples:
    |email|message|
    |lzuo@movoto.com     |没有这个电子邮箱。|
    |test@movto|邮箱不合法|
  
 