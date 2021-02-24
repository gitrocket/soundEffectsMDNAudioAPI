
// sound names for innerHTML of buttons
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound => {
    const button = document.createElement('button'); // create a button element
    button.classList.add('btn'); // add a class of btn to the button

    button.innerHTML = sound; // assign value from list of sounds to innerHTML of button

    button.addEventListener('click', () => {
        stopSound()
        document.getElementById(sound).play(); // sound is part of the mdn api
    })

    document.getElementById('buttons').appendChild(button);

})

// stop sound effect from playing over the next
function stopSound() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}