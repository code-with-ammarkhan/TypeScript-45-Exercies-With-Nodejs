// Define The Make_Album Function
function make_album (artist_name: string, album_title: string, tracks?: number){
  let album: {artist: string, title: string, tracks?: number} = {
    artist: artist_name, 
    title:  album_title,
  };

   if (tracks !== undefined ){
       album.tracks = tracks;
   };

   return album;


}

// Calling a Three Functions and Creating 3 Variables With Different Values

let album1 = make_album("Ammar", "Album Title 1");

let album2 = make_album("Usman", "Album Title 2");

// Calling a Make Make_Album Function With Third Parameter
let album3 = make_album("Umair", "Album Title 3", 10);

// Print The Variable

console.log(album1);
console.log(album2);
console.log(album3);