// Creating a Array 
let userName = ["Mahad", "Ali", "Admin", "Zeshan", "Usman"];

// Using ForEach Loop on Array
userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thankyou for logging in again.`)
    }
});
