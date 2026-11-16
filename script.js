
// Images, titles, colors, and sounds

let images = [
    "images/window.jpg",
    "images/street.jpg",
    "images/thunder.jpg"
];

let titles = [
    "Rain on the Window",
    "Rainy City Street",
    "Distant Thunder"
];

let colors = [
    "#e7edf2",
    "#e5e8ec",
    "#dfe2e9"
];

let sounds = [
    "audio/window.mp3",
    "audio/city.mp3",
    "audio/thunder.mp3"
];


// Change the scene

function showScene(number) {

    // Change the image and title

    document.getElementById("sceneImage").src = images[number];

    document.getElementById("sceneImage").alt = titles[number];

    document.getElementById("sceneTitle").innerHTML = titles[number];

    document.getElementById("audioTitle").innerHTML = titles[number];


    // Change the background color

    document.body.style.backgroundColor = colors[number];


    // Change the audio

    let audio = document.getElementById("sceneAudio");

    audio.pause();

    audio.src = sounds[number];

    audio.load();

}
