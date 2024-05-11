// Define a Function With a Rest Parameter That Accept Items Arguments Representing our Sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following itme: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call THe Function 3 Times With 3 Different Number of Arguments
makeSandwich("Chiken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Chiken", "Cheese", "Lettuce", "Tomato");
