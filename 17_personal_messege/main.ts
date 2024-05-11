// Creating a Guest List Array 
let guestList = ["Ammar", "Umer", "Ali", "Ayan"];

// Making variable for those guest who cant come
let dontCome = guestList [0];

// Print the name of guest who cant come
console.log(dontCome, "Naii Ahh Sakty Han");

// Add or Remove Values form Guest List  Array
guestList.splice(0, 1,"Amirr");

// Messege Print For Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner");

// Adding a new Guest at starting index of array
guestList.unshift("Ali");

// Adding a new Guest at ending index of array
guestList.push("Zain");

// Adding a new guest at middle index of Array
let middleindex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice( middleindex, 0, "Osama");

// Print messege of Updated List 
console.log("Updated List of our Guests");

// Sending invitation messege to our guests one by one with their name
guestList.forEach(oneguest => console.log(`Assalam Allaikum ${oneguest}, would like to dinner with me?`));

// Inform that only to guests can be invited for dinner
console.log ("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

// Using While-loop to remove guests from the array until only two names remain
while(guestList.length > 2) {
     let removedGuest = guestList.pop();
     console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}
// Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guest");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);