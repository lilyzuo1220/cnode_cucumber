@delete 
Feature: delete topics
    Author:Lily
    Date:2017-12-22
# Background:删除话题前导航到首页
#     Given 删除话题前导航到首页
Scenario: 登录后删除首页第一个话题
    When 登录
    Then 导航到删除topic页面,删除话题

 
