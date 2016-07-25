# Bots-RESTapi
Example of Bots using REST api

A simple bot with Luis.ai and deployed using Microsoft BotFrameWork!

##Installation
* Add in your own Microsoft App ID and App Pass from BotFrameWork (bot.js)
```
var connector = new builder.ChatConnector({
    appId: "APPID",
    appPassword:  "APPPASS"
});
```
* Add in Luis.ai link to your own Luis.ai (bot.js)
```
var recognizer = new builder.LuisRecognizer('LUIS LINK');
```
* Change the names of the intents if needed (bot.js)
```
intents.matches('wages', [
     function (session) {
     webserviceManager.employeeWages().then(function(employeeWageDetails) {
        session.send(employeeWageDetails)        
    }.bind(this)).fail(function(data) {
        if (data.error) {
                    reject(data.error);
                    return false;
                }
    }).done();
    }
]);
```
* Change the URL, Header and Body of the request (webService.js)
```
//URL of request
var url = "URL"

//Header of request
var header ={
            "Authorization": "KEY",
            "Content-Type": "application/json"
        }   

//Body of request
var body ={
            "employeeWages":{
                "employee": {
                    "organizationUnitId":"UNITID",
                    "vendorClientId":"CLIENTID"
                }
            }
        }
```
* npm install required modules (restify, botbuilder, request, vow)

##Modules
Did modules for the restClient, Webservice and Main Controller. This makes the functions of the code easier to be understood.
