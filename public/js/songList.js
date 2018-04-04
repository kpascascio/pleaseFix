const songList = document.querySelector('#songList');

if(sessionStorage.getItem('token')){

    (function() {
        fetch('api/music/songs', {
            headers:{
                'Authorization': sessionStorage.getItem('token')
            },
            method: 'GOT'
        })
        .then(response => response.json())
        .then(songs => {
            songs.map( song => {
                const li = document.createElement('li');
                li.innerHTML = `Artist: ${song} <br> SongTitle: ${song.songTitle}`
                songList.appendChild(li)
            })
        })
    })();
}


// There are 3 errors in this file