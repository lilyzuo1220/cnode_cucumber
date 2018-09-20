@datatable
Feature: use datatable
Scenario:
用户注册
When 登录页面
When 输入注册信息
|username|pass|repass|email|
|1117|1234567|1234567|1117@mailinator.com|
Then 点击注册
