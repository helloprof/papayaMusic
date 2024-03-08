


let {songs} = window


// console.log(songs)

function filterSongsByDuration(minDuration, songs) {
    let filteredSongs = []

    songs.forEach((song) => {
        if (song.durationMinutes >= minDuration ) {
            filteredSongs.push(song)
        }
    })

    return filteredSongs

}

function filterSongsById(id, songs) {
    let filteredSongs = []

    songs.forEach((song) => {
        if (song.id === id ) {
            filteredSongs.push(song)
        }
    })

    return filteredSongs

}


let menuDiv = document.getElementById('menu');
let menuDiv2 = document.querySelector('#menu');

const output = filterSongsByDuration(2, songs)

console.log(output)
console.log("hello!")
console.log("new change")
console.log(window)



