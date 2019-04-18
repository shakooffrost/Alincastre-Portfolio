var submit = document.getElementById('submit').addEventListener('click', function (event) {
    var songArtist = document.getElementById('songArtist').value;
    var songName = document.getElementById('songName').value;
    var songURL = "https://api.lyrics.ovh/v1/" + songArtist + "/" + songName;
    var lyrics = document.getElementById('lyrics');

    fetch(songURL)
        .then(function (response) {

            if (!response.ok) {
                throw Error(response.status);
            }
            return response.json();
        })
        .then(function (data) {
            lyrics.innerHTML = data.lyrics.replace(/\n/g, '<br>')
            // for (var i = 0; i < data.length; i++) {
            //     console.log(data);
        })
})
