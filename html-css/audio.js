const music = document.querySelector("audio");
const play = document.getElementById("play");
const image = document.querySelector("img");
const total_duration = document.getElementById("duration");
const total_current_time = document.getElementById("current_time");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const progress_bar = document.getElementById("progress_bar")
const list = document.getElementById("list")
const audiolist = document.querySelector(".audiolist")

list.addEventListener("click",()=>{
    audiolist.style.zIndex= "1";
})
let musicplaying = false;
// for Playing The music
const musicplay = () => {
    musicplaying = false;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
};
// for pause The music
const musicpause = () => {
    musicplaying = true;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
};

play.addEventListener("click", () => {
    if (musicplaying) {
        musicplay();
    }
    else {
        musicpause();
    }
});

music.addEventListener("timeupdate", (event) => {
    const { currentTime, duration } = event.srcElement;
   
    let progresstime =  (currentTime / duration) * 100;
    progress_bar.style.width = `${progresstime}%`;
    
    let loadtime = (currentTime / duration) * 100;
    let minute_duration = Math.floor(duration / 60);
    let seconds_duration = Math.floor(duration % 60);
  
    let total_du = ` ${minute_duration} : ${seconds_duration}`;
    if (duration) {
        total_duration.textContent = `${total_du}`;
    }

    let minute_current = Math.floor(currentTime / 60);
    let seconds_current = Math.floor(currentTime % 60);

    if (seconds_current < 10) {
        seconds_current = `0${seconds_current}`
    }
    let total_cu = ` ${minute_current} : ${seconds_current}`;
    total_current_time.textContent = `${total_cu}`;
});

const loadSongs = (songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    image.src="image/"+songs.img
    music.src="music/"+songs.src
}
// For Next And Previous Button
songindex = 0
const nextplay = ()=>{
    songindex = [songindex + 1] % tracklist.length
    loadSongs(tracklist[songindex]); 
    musicplay();
}
const previousplay = ()=>{
    songindex = [songindex - 1 + tracklist.length] %tracklist.length 
    loadSongs(tracklist[songindex]); 
    musicplay();
}
music.addEventListener("ended",nextplay);
next.addEventListener("click", nextplay);
previous.addEventListener("click", previousplay);