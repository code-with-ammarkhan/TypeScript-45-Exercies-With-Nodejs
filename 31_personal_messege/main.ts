// Creating a Array
let userName = ["Mahad","Ali", "Zeshan","Admin","Usman"];

userName = []

if(userName.length === 0){
   console.log("Your Array is Empty We need to find some users!")
}else {
     // Using ForEach Loop on Array
        userName.forEach(oneUser => {
        if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
        console.log(`Hello ${oneUser}, thankyou for logging in again.`)
    }
});
}
    
