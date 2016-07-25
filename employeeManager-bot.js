var restify = require('restify');
var builder = require('botbuilder');
var request = require('request')
var webservice = require('./webserviceManager')

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    appId: "APPID",
    appPassword:  "APPPASS"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//Link with Luis
var recognizer = new builder.LuisRecognizer('LUIS LINK');
var intents = new builder.IntentDialog({ recognizers: [recognizer] });
bot.dialog('/', intents);

//=========================================================
// Intent Setup
//=========================================================

var webserviceManager = new webservice

//Check if matches with Luis intent
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

//Check if matches with Luis intent
intents.matches('timecards', [
     function (session) {
     webserviceManager.employeeTimeCard().then(function(employeeTimeCardDetails) {
        session.send(employeeTimeCardDetails)        
    }.bind(this)).fail(function(data) {
        if (data.error) {
                    reject(data.error);
                    return false;
                }
    }).done();
    }
]);