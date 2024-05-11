// Mkaing a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
   console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a Function With By Default Values
make_shirt();

// Calling a Function Now With Medium Size and Default Message
make_shirt("Medium");

// Calling a Function Now With Small Size and Different Print on Message
make_shirt("Small", "I Love TypeScript");