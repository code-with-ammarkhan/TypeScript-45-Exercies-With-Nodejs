// Array Of Current User
let current_user = ["Usman","ali","Umar","Ammar","Hashir"];

// Array Of New User
let new_user = ["Hamza","Ayesha","Ali","Ammar","Ahsan"];

// Loop Through New_Users To Cheak For usernames Avaiibility
new_user.forEach(new_one_user => {
    
    // Making a Condition For Username Already Exist And Save In our_condition Variable
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Different Messeges Using If - Else Statements
    if(our_condition){
          console.log(`Sorry ${new_one_user} is already taken !!`)
    }else{
        console.log(`This Username ${new_one_user} is available **`)
    }
});
