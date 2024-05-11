let guestlist = ["Ammar", "Umer", "Ayan ", "Fahad"];

let dontCome = guestlist[0];

console.log (dontCome, "Nai Ahh Sakta");

guestlist.splice(0, 1,"Amir");

guestlist.forEach(guest => console.log(`Assalam Allaikum ${guest}, would u like to Dinner with me?`));