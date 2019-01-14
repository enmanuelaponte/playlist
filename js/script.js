/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Winter","Summer","Spring","Fall"];
var artists = ["Antonio Vivaldi"]
var imgurl = ["https://i.ytimg.com/vi/xMP9RLtXfQU/hqdefault.jpg","https://i.ytimg.com/vi/f9SOuZFm87c/maxresdefault.jpg","https://i.ytimg.com/vi/rpRaWctvbOU/hqdefault.jpg","https://i.ytimg.com/vi/GRxofEmo3HA/hqdefault.jpg"]
var links = ["https://www.youtube.com/watch?v=TZCfydWF48c","https://www.youtube.com/watch?v=KY1p-FmjT1M","https://www.youtube.com/watch?v=IjpLxlSMJPo","https://www.youtube.com/watch?v=gYyc4WXS2_Q"]
var length = ["563","669","628","643"]
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    imgurl.forEach(function(img){
        
});
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
