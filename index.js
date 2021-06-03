
var readlineSync = require('readline-sync');
// Variable username and dateOfBirth initialised 
var username = readlineSync.question("Please enter your name: ");
console.log("Want to know if you were born in a leap year?");
var dateOfBirth = readlineSync.question(username+ ", please enter your date of birth in (date/month/year) format - 01/01/2001:\n");

// Var dobArray initialised - array in DD/MM/YYYY format)
var dobArray = dateOfBirth.split("/");

// Process 
var year = dobArray[dobArray.length - 1];
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }










