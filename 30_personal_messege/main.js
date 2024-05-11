// Creating a Array 
var userName = ["Mahad", "Ali", "Admin", "Zeshan", "Usman"];
// Using ForEach Loop on Array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
    }
});
