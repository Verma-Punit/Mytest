const tracklist = [
    {
        title: "Zara Zara Behkta Hai",
        artist: "Arjit Singh",
        img: "image0.jpg",
        src: "music0.mp3",
    },
    {
        title: "Zara Dekh Mera Dewanapan",
        artist: "Udit Narayan",
        img: "image1.jpg",
        src: "music1.mp3",
    },
    {
        title: "Thoda Thoda Pyar",
        artist: "Jubain Nautiyal",
        img: "image2.jpg",
        src: "music2.mp3",
    },
    {
        title: "Maira Dil Bhi Kitna Pagal Hai",
        artist: "Kumar Sanu",
        img: "image3.jpg",
        src: "music3.mp3",
    },
];

for (let i = 0; i < tracklist.length; i++) {
    let details = `<div class="details"onclick="clicked(this);" details_index="${i}" >
              <span>
                 <h1 class="title">${tracklist[i].title}</h1>
                 <p class="artist">${tracklist[i].artist}</p>
              </span>
              <span>
                 <i id="line" class="fas fa-ellipsis-v"></i>
              </span>
        </div>`;
    song_list.insertAdjacentHTML("beforeend", details);
}
function clicked(Element) {
    let getdetailsindex = Element.getAttribute("details_index")
    songindex = getdetailsindex;
    loadSongs(songindex);
    musicplay();
}
