


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

const output = filterSongsByDuration(2, songs)

console.log(output)
console.log("hello!")
console.log("new change")
console.log(window)



