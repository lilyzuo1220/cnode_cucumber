@reply
Feature: reply topic
    Author:Lily
    date:2017-12-21
Background:
    Given 回复话题前请登录

Scenario Outline: 从首页回复话题
    Then 'homepage'回复话题。传入是否上传链接的值'<hyperlink>',是否上传图片的值'<image>',回复的内容'<content>',回复后的状态'<status>'
    Examples:
    |hyperlink|image|content|status|
    |true     |true |reply01|succeed|
    |true     |false|reply02|succeed|
    |false    |true |reply03|succeed|
    |false    |false|reply04|succeed|
    |true     |true |       |succeed|

Scenario:回复话题时没有输入任何内容
    Then 从'homepage'回复话题。没有输入任何内容就回复话题,显示错误提示信息'回复内容不能为空!'

Scenario: 首页没有话题可以回复时
    # When 首页没有话题可以分享
    Then 发布新的话题,tab选择'问答',title是'reply01',不上传hyperlink 'false',不上传图片'false',内容传入'reply01',发帖成功'success'
    Then 回复新话题,上传链接的值'true',上传图片的值'true',回复的内容'replytest01',回复后的状态'succeed'





    