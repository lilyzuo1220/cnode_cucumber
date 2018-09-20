@api
Feature: ApiTest
    #Url:http://118.31.19.120:3000/api
    Date:2017-11-03
    author: lily
    npm: https://www.npmjs.com/package/axios

Scenario Outline: Get data
    * Get the service api "<URL>" and I should get the "<expectval>"
    Examples: 
      | URL                               |expectval|                                                                                      
      |http://localhost:3000/api/v1/topics|ask      |  

Scenario Outline: Post data from examples
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                  | data                                                | expectval                                           |
      | http://localhost:3000/api/v1/topics  | { "accesstoken":"d59f1703-8796-4383-980c-0bf592630362", "title":"1234dddddd", "tab":"ask","content":"123132132243433"} | true |


Scenario Outline: Post data from .json file
    * Post to service api "<URL>" and I should get the '<expectval>'
    Examples: 
      | URL             | expectval                                           |
      | http://localhost:3000/api/v1/topics  | true |



    
