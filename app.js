const pianoKeys = document.querySelectorAll('.key')

const playSound = (sound) => {
    new Audio(sound).play()
}

pianoKeys.forEach((pianoKey, i) => {
    const soundIndex = i < 9 ? '0' + (i + 1) : (i+1);
    const whichSound = `24-piano-keys/key${soundIndex}.mp3`;
    
    pianoKey.addEventListener('click', () => playSound(whichSound));
})