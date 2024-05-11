// Define The Make_Album Function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    ;
    return album;
}
// Calling a Three Functions and Creating 3 Variables With Different Values
var album1 = make_album("Ammar", "Album Title 1");
var album2 = make_album("Usman", "Album Title 2");
// Calling a Make Make_Album Function With Third Parameter
var album3 = make_album("Umair", "Album Title 3", 10);
// Print The Variable
console.log(album1);
console.log(album2);
console.log(album3);
