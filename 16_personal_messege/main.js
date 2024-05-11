// Creating a Guest List Array 
var guestList = ["Ammar", "Umer", "Ali", "Ayan"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Naii Ahh Sakty Han");
// Add or Remove Values form Guest List  Array
guestList.splice(0, 1, "Amirr");
// Messege Print For Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner");
// Adding a new Guest at starting index of array
guestList.unshift("Ali");
// Adding a new Guest at ending index of array
guestList.push("Zain");
// Adding a new guest at middle index of Array
var middleindex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleindex, 0, "Osama");
// Print messege of Updated List 
console.log("Updated List of our Guests");
// Sending invitation messege to our guests one by one with their name
guestList.forEach(function (oneguest) { return console.log("Assalam Allaikum ".concat(oneguest, ", would like to dinner with me?")); });
