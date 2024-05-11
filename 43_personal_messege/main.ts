// Define The Function to Show Magicians Names 
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
 }
 
 // Function to Make Magicians Great Through .map() it Will Modify Array
 function make_great (magicians: string[]){
  return magicians.map(name => `The Great ${name}`);
 }
 
 // Define an Array of Magicians Names 
 let magician_names = ["Harry Poter", "Hamza", "Usman" ];
 
 // Making a Copy of Orginal Array Through .Slice Function
 let copy_magician_names = magician_names.slice();

 // Modify the Copied Array to Include "The Great" With Their Names 
let copy_great_magicians = make_great(copy_magician_names);

// Show Both Arrays Orginal or Copied

// Orginal 
console.log("Orginal Array\n");
show_magicians(magician_names);

// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);

