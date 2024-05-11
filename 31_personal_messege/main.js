// Creating a Array
var userName = ["Mahad", "Ali", "Zeshan", "Admin", "Usman"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array is Empty We need to find some users!");
}
else {
    // Using ForEach Loop on Array
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
        }
    });
}
