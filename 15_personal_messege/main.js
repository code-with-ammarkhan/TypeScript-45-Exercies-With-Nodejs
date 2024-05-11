var guestlist = ["Ammar", "Umer", "Ayan ", "Fahad"];
var dontCome = guestlist[0];
console.log(dontCome, "Nai Ahh Sakta");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("Assalam Allaikum ".concat(guest, ", would u like to Dinner with me?")); });
