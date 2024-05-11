// Define The Function to Show Magicians Names 
function show_magicians(magicians: string[]){
   magicians.forEach(name => console.log(name));
}

// Function to Make Magicians Great Through .map() it Will Modify Array
function make_great (magicians: string[]){
 return magicians.map(name => `The Greater ${name}`);
}

// Define an Array of Magicians Names 
let magician_names = ["Harry Poter", "Hamza", "Usman" ];

// Call make_great Function to Modify Magicians Names
let great_magicians = make_great(magician_names);

// Call show_magicians That Show Modified List of Magicians
show_magicians(great_magicians);

