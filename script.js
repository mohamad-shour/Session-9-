const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Song titles
const songs = {'song1', 'Bazzi'};

// Keep treck of song
let songIndex = 1;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details 
function loadSong(song) {
    title.innerText = song;
    audio.src = `Music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}


// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}


// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pauseSong();
}

// Previous Song
function prevSong() {
    songIndex--;

        if(songIndex < 1)  {
    songIndex = songs.length -2;
    }
    loadSong(songs[songIndex]);
    playSong();
}


// Event listeners
playBtn.addEventListener ('click' () => {
const isPlaying = musicContainer.classList.contains{'play'};

if(isPlaying) {
pauseSong();
} else{
    playSong();
}
});

// Change song 
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);