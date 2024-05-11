// Array Of Current User
var current_user = ["Usman", "ali", "Umar", "Ammar", "Hashir"];
// Array Of New User
var new_user = ["Hamza", "Ayesha", "Ali", "Ammar", "Ahsan"];
// Loop Through New_Users To Cheak For usernames Avaiibility
new_user.forEach(function (new_one_user) {
    // Making a Condition For Username Already Exist And Save In our_condition Variable
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different Messeges Using If - Else Statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken !!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available **"));
    }
});
