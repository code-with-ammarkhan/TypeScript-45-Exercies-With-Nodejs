// Creating a Function With Parameters Which Returna a Value in String
function city_country (city: string, country: string) : string {
   return`${city} , ${country}`;
}

// Calling a Function And Print The Returned Value
console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Berlin", "Germany"));