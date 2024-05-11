// Define a Function With a Rest Parameter That Accept Items Arguments Representing our Sandwich
function makeSandwich(...items: string[]){
   console.log("\nMaking a sandwich with the following itme: \n");

   items.forEach(singleItem => console.log("-" + singleItem));

   console.log("\nNow Enjoy Sandwich");
}

// Call THe Function 3 Times With 3 Different Number of Arguments
makeSandwich("Chiken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Chiken", "Cheese", "Lettuce" , "Tomato");
 
