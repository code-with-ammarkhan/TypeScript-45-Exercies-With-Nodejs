// Making a Array Of Countries and Print its Orginal Order
let countriesToVisit: string [] = ["China" , "Denmark ", "Brazil", "Argentina"];
console.log("Orginal Order:",countriesToVisit)

// Print The Array in Alphabatical  order without modifying the Actual Array List
console.log("Alphabatical Order:", [...countriesToVisit].sort());

// Show that array is still in its orginal order
console.log("Still in orginal order:",countriesToVisit);

// Print the Array in Reversed with out modifying the Actual Array List
console.log("Reverse order:", [...countriesToVisit].reverse());

console.log("Still in Orginal order:", countriesToVisit );

// We have Change the Orginal Array Order Now
console.log("Orginal Array Reversed:", countriesToVisit.reverse());

// Print the Array to Show that is back to it's back it's to orginal order
console.log("Back to Orginal order:", countriesToVisit.reverse());

// Print the Array to that its order has been change in Alphabetical order now
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());

// We have Change again the Orginal Array Order Now in reversed order again
console.log("Orginal Array Reversed Again:", countriesToVisit.reverse());




