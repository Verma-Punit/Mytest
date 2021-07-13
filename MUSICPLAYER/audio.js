const music = document.querySelector("audio");
const play = document.getElementById("play");
const image = document.getElementById("img");
const total_duration = document.getElementById("duration");
const total_current_time = document.getElementById("current_time");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const progress_bar = document.getElementById("progress_bar");
const list = document.getElementById("list");
const audiolist = document.querySelector(".audiolist");
const body = document.querySelector("body");
const push_down = document.querySelector("#close");
const function_lis = document.querySelector(".Function");
const dotline = document.getElementById("dotline");
const minimize_player = document.querySelector(".minimize_player");
const down = document.getElementById("down");
const container = document.querySelector(".container");
const song_list = document.querySelector(".song_list");
const playlist = document.querySelector(".details");


window.addEventListener( "load" ,() => {
    loadSongs(songindex); 
});
function loadSongs(songindex)
{
    title.textContent =`${tracklist[songindex].title}`;
    artist.textContent = `${tracklist[songindex].artist}`;
    image.src = `image/${tracklist[songindex].img}`;
    music.src = `music/${tracklist[songindex].src}`;
};
down.addEventListener("click",()=>{
    container.style.transform = "scaleY(0)";
    container.style.transition = "0.5s";
    container.style.boxShadow="0px 0px 0px 0px rgba(0,0,0,0.68)";
})

dotline.addEventListener("click", () => {
    function_lis.style.height = "400px";
    function_lis.style.transition = "1s";
    function_lis.style.opacity = "0.9";
})

list.addEventListener("click", () => {
    audiolist.style.height = "400px";
    audiolist.style.opacity = "0.9";
    audiolist.style.transition = "1s";
})

push_down.addEventListener("click", () => {
    audiolist.style.height = "0px";
    audiolist.style.transition = "3s";
})

let musicplaying = false;
// for Playing The music
const musicplay = () => {
    musicplaying = false;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    function_lis.style.height = "0px";
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

    let progresstime = (currentTime / duration) * 100;
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


// For Next And Previous Button
songindex = 0
const nextplay = () => {
    songindex = [songindex + 1] % tracklist.length
    loadSongs(songindex);
    musicplay();
}
const previousplay = () => {
    songindex = [songindex - 1 + tracklist.length] % tracklist.length
    loadSongs(songindex);
    musicplay();
}
music.addEventListener("ended", nextplay);
next.addEventListener("click", nextplay);
previous.addEventListener("click", previousplay);

