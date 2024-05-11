// Define The Function to Show Magicians Names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to Make Magicians Great Through .map() it Will Modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Greater ".concat(name); });
}
// Define an Array of Magicians Names 
var magician_names = ["Harry Poter", "Hamza", "Usman"];
// Call make_great Function to Modify Magicians Names
var great_magicians = make_great(magician_names);
// Call show_magicians That Show Modified List of Magicians
show_magicians(great_magicians);
