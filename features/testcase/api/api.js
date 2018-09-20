let {defineSupportCode} = require('cucumber')
let assert = require('assert')
let got = require('got')
let post_info = require('./data_post')
console.log(post_info.posts)

    defineSupportCode(function ({ Given, When, Then }) {
        var jsonFormat = {
            headers: { 'Content-Type': 'application/json' },
            json: true
        };
        Given('Get the service api {string} and I should get the {string}', function (string, string2) {
            return got.get(string, jsonFormat).then(function (result) {
                var res = result.body;
                return assert.deepEqual(string2,res.data[0].tab)
            });
          });
          // post-- data come from Scenario Outline
          Given('Post to service api {string} with {string} and I should get the {string}', function (string,string2, string3) {
            var option = {
                headers: { 'Content-Type': 'application/json' },
                json: true,
                body: JSON.parse(string2) //把body里面的字符串转换成对象的格式 {key:'value',key:'value'}
            };
            return got.post(string, option).then(function (res) {
                var data = res.body;
                return assert.deepEqual(data.success, JSON.parse(string3));
            });
          });
          // post -- data come from .json file
          Given('Post to service api {string} and I should get the {string}', function (string,string2) {
            var option = {
                headers: { 'Content-Type': 'application/json' },
                json: true,
                body: post_info.posts
            };
            return got.post(string, option).then(function (res) {
                var data = res.body;
                return assert.deepEqual(data.success, JSON.parse(string2));
            });
          });
    
})

