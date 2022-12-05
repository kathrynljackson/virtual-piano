const pianoKeys = document.querySelectorAll('.key')

const playSound = (sound) => {
    new Audio(sound).play()
}

pianoKeys.forEach((pianoKey, i) => {
    const orderedSounds = ['09','11','14','16','18','21','23','02','04','06','08','10','12','13','15','17','19','20','22','24','01','03','05','07']
    const whichSound = `24-piano-keys/key${orderedSounds[i]}.mp3`;

    pianoKey.addEventListener('click', () => playSound(whichSound));
})