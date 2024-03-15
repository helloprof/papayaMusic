/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

function generateArtistButtons(artists) {
    console.log("generating artists")

    const menu = document.querySelector('#menu')
    artists.forEach(function(artist) {
        const artistButton = document.createElement('button')
        artistButton.textContent = artist.name
        artistButton.addEventListener("click", (e) => {
            const header = document.getElementById("selected-artist")
            header.textContent = artist.name
            generateSongsTable(artist.artistID)
        })

        menu.appendChild(artistButton)
    })
}

function generateSongsTable(artistID) {
    let songsByArtist = songs.filter((song) => song.artistID == artistID)

    const tbody = document.getElementById("songs")
    tbody.remove()
    const tbodyReset = document.createElement('tbody')
    tbodyReset.id = "songs"
    const table = document.querySelector('table')
    table.appendChild(tbodyReset)


    songsByArtist.forEach((song) => {
        const tbody = document.getElementById("songs")

        const tableRow = document.createElement('tr')
        tableRow.addEventListener("click", (e) => {
            console.log(song)
        })
        tbody.appendChild(tableRow)

        const songTitle = document.createElement('td')
        songTitle.textContent = song.title

        const songAlbum = document.createElement('td')
        songAlbum.textContent = song.albumName

        const songYear = document.createElement('td')
        songYear.textContent = song.year

        tableRow.appendChild(songTitle)
        tableRow.appendChild(songAlbum)
        tableRow.appendChild(songYear)      
    })
    
} 


function main() {
    console.log("page loaded")
    // main function here 
    generateArtistButtons(artists)
}

window.addEventListener("load", main)