// Define a Function to Create a Car Object With Optional Optional Options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Innitialize a Car Object With Manufacturer and Model 
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add  Additional Options to The Car Object 
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call The Function to Create a Car Object
var my_car = create_car("Toyota", "Corrolla", "Color: Black", "Sunroof: True", "Year: 2024");
// Print The Variable to Ensure All The Information is Stored Correctly in The Car Object 
console.log(my_car);
