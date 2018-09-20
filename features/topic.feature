@topic
Feature: publish topic
    发布话题功能测试
    负责人：lily
    时间2017-12-20
Background: 登录后导航到发布话题页面
    Given 登录后导航到发布话题页面

Scenario Outline: 选则不同板块且成功发布话题
    Then 板块选择'<tab>',标题输入'<title>',上传超链接'<hyperlink>',上传照片'<image>',输入内容'<content>'
    Examples:
    |tab|title|hyperlink|image|content|
    |分享|1有什么秘密可以分享啊|true|true|1大家快来围观啊啊啊啊啊啊啊啊啊|
    |问答|2有什么问题想问啊|false|true|2大家快来问啊啊啊啊啊啊啊啊啊|
    |招聘|3有什么招聘启事啊|false|false|3大家快来参加招聘大会啊啊啊啊啊啊啊|

@p1
Scenario Outline:title和内容为空时发布话题
    Then title和内容分别是空的时候发布话题。板块选择'<tab>',标题输入'<title>',输入内容'<content>',显示错误提示信息'<message>'
    Examples:
    |tab|title|content|message|
    |问答|    |2大家快来问啊啊啊啊啊啊啊啊啊|标题不能是空的。|
    |招聘|3有什么招聘启事啊||内容不可为空|
@p2
Scenario Outline:板块为空时发布话题
    Then 板块为空时发布话题。板块选择'<tab>',标题输入'<title>',输入内容'<content>',显示错误提示信息'<message>'
    Examples:
    |tab|title|content|message|
    |   |1有什么秘密可以分享啊|1大家快来围观啊啊啊啊啊啊啊啊啊|必须选择一个版块！|
    

    