var rest = require('./restClient')
var Vow = require('vow');

var restClient = new rest ()

//=========================================================
// Constructor Setup
//=========================================================

var webserviceManager = function Constructor(settings) {
};

//=========================================================
// WebService Setup
//=========================================================

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

//Set up Promise for data
webserviceManager.prototype.employeeWages = function () {
    return new Vow.Promise(function (resolve, reject) {
        restClient.post(url, header, body).then(function(data) {
         var employee = data.employeeWagesResponse.employeeWagesResult.employeeWages.employee;
         var employeeWageDetails = null;
         for (var key in employee) {
            var value = employee[key];
            employeeWageDetails += key + ' : ' + value + '\n\n';
         }
        try {
            if (employeeWageDetails) {
                        resolve(employeeWageDetails);
                    } else {
                        reject(employeeWageDetails);
                    }

                } catch (e) {
                    reject(e);
                }           
    }.bind(this)).fail(function(data) {
        if (data.error) {
                    reject(data.error);
                    return false;
                }
    }).done();
    })   
}

//URL of request
var url = "URL"

//Header of request
var header ={
            "Authorization": "KEY",
            "Content-Type": "application/json"
        }  

//Body of request
var body ={
        "employeeTimeCard":{
            "employee": {
                    "organizationUnitId":"UNITID",
                    "vendorClientId":"CLIENTID",
                    "startDate":"2015-01-01",
                    "endDate":"2016-12-12"
                    } 
                } 
            }

//Set up Promise for data
webserviceManager.prototype.employeeTimeCard = function () {
    return new Vow.Promise(function (resolve, reject) {
        restClient.post(url, header, body).then(function(data) {
         var employee = data.employeeTimeCardResponse.employeeTimeCardResult.employeeTimeCard.employee;
         var employeeTimeCardDetails = null;
         for(var i = 0; i < employee.length; i++){
             var employeedetails = employee[i]
            for (var key in employeedetails) {
                var value = employeedetails[key];
                employeeTimeCardDetails += key + ' : ' + value + '\n\n';
            }
            employeeTimeCardDetails += "\n\n\n\n"
         }
        try {
            if (employeeTimeCardDetails) {
                        resolve(employeeTimeCardDetails);
                    } else {
                        reject(employeeTimeCardDetails);
                    }

                } catch (e) {
                    reject(e);
                }           
    }.bind(this)).fail(function(data) {
        if (data.error) {
                    reject(data.error);
                    return false;
                }
    }).done();
    })   
}

//Export webservice
module.exports = webserviceManager;