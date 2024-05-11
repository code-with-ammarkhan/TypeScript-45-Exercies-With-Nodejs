// Mkaing a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a Function With By Default Values
make_shirt();
// Calling a Function Now With Medium Size and Default Message
make_shirt("Medium");
// Calling a Function Now With Small Size and Different Print on Message
make_shirt("Small", "I Love TypeScript");
