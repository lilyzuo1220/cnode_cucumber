
@register
Feature: register function Test
注册功能测试
负责人：lily
时间2017-10-22
Background:导航到注册页面
    Given 导航到注册页面

@r1
Scenario: 注册成功,且激活后可以登录成功
    Then 输入用户名,密码输入'123456',确认密码输入'123456',输入邮箱,注册成功显示'欢迎加入 Nodeclub！我们已给您的注册邮箱发送了一封邮件，请点击里面的链接来激活您的帐号。'
    Then 激活用户后可以正常登录

Scenario Outline: 注册时输入不同的信息且注册失败
    Then 用户名和邮箱是变量.输入用户名,密码输入'<pass>',确认密码输入'<re_pass>',输入邮箱,提交后应该收到'<errormessage>'
    Examples:
    |username|pass|re_pass|email|errormessage|
    |        |    |123456 |     |信息不完整。|
    |        |123456|     |     |信息不完整。|
    |        |123456|12345|     |两次密码输入不一致。|
    |        |    |       |     |信息不完整。|

@20171219
Scenario Outline: 输入为空或者已注册的用户名
    Then 输入为空或者已注册的用户名,用户名输入'<username>',密码输入'<pass>',确认密码输入'<re_pass>',输入带有时间戳的邮箱,提交后应该收到'<errormessage>'
    Examples:
    |username|pass|re_pass|email|errormessage|
    |        |123456|123456|    |信息不完整。 |
    |llzuo   |123456|123456|    |用户名或邮箱已被使用。|

@user2
Scenario:用户名少于5个字符
    Then 输入用户名少于最小值字符,密码输入'123456',确认密码输入'123456',输入带有时间戳的邮箱,提交后应该收到'用户名至少需要5个字符。'


@test2
Scenario Outline: 注册时输入email不合法
    Then 输入不合法的email。输入带有时间戳的用户名,密码输入'<pass>',确认密码输入'<re_pass>',邮箱输入'<email>',提交后应该收到'<errormessage>'
Examples:
    |username|pass|re_pass|email|errormessage|
    |        |123456|123456|    |信息不完整。|
    |        |123456|123456|test.com|邮箱不合法。|
    |        |123456|123456|test@movoto.com|用户名或邮箱已被使用。|





