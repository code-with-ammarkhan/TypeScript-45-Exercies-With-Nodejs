// Define The Function to Show Magicians Names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to Make Magicians Great Through .map() it Will Modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an Array of Magicians Names 
var magician_names = ["Harry Poter", "Hamza", "Usman"];
// Making a Copy of Orginal Array Through .Slice Function
var copy_magician_names = magician_names.slice();
// Modify the Copied Array to Include "The Great" With Their Names 
var copy_great_magicians = make_great(copy_magician_names);
// Show Both Arrays Orginal or Copied
// Orginal 
console.log("Orginal Array\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
