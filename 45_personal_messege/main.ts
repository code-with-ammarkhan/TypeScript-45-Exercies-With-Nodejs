// Define a Function to Create a Car Object With Optional Optional Options...
function create_car (manufacturer, model, ...options){
    // Innitialize a Car Object With Manufacturer and Model 
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add  Additional Options to The Car Object 
   options.forEach(option => {
       let [key, value] = option.split(":");
       car[key.trim()] = value.trim();
    });

    return car;
}

// Call The Function to Create a Car Object
let my_car = create_car("Toyota", "Corrolla", "Color: Black" , "Sunroof: True", "Year: 2024");

// Print The Variable to Ensure All The Information is Stored Correctly in The Car Object 
console.log(my_car);


