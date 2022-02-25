let colors = ['yellow', 'red', 'green', 'blue']

const FourBoxes = document.getElementById('FourBoxes');
const NineBoxes = document.getElementById('NineBoxes');
NineBoxes.style.display = 'none';

FourBox1.addEventListener('click', setRandom4Color)
FourBox2.addEventListener('click', setRandom4Color)
FourBox3.addEventListener('click', setRandom4Color)
FourBox4.addEventListener('click', setRandom4Color)

NineBox1.addEventListener('click', setRandom9Color)
NineBox2.addEventListener('click', setRandom9Color)
NineBox3.addEventListener('click', setRandom9Color)
NineBox4.addEventListener('click', setRandom9Color)
NineBox5.addEventListener('click', setRandom9Color)
NineBox6.addEventListener('click', setRandom9Color)
NineBox7.addEventListener('click', setRandom9Color)
NineBox8.addEventListener('click', setRandom9Color)
NineBox9.addEventListener('click', setRandom9Color)

function setRandom4Color(event) {
    let randomNum = Math.floor(Math.random() * colors.length);
    if (colors[randomNum] == event.target.style.backgroundColor) {
        setRandom4Color(event);
    } else {
        event.target.style.backgroundColor = colors[randomNum];
        check4Winner();
    }
};

function setRandom9Color(event) {
    let randomNum = Math.floor(Math.random() * colors.length);
    if (colors[randomNum] == event.target.style.backgroundColor) {
        setRandom9Color(event);
    } else {
        event.target.style.backgroundColor = colors[randomNum];
        check9Winner();
    }
};

let FourBoxArray = [FourBox1, FourBox2, FourBox3, FourBox4]
let NineBoxArray = [NineBox1, NineBox2, NineBox3, NineBox4, NineBox5, NineBox6, NineBox7, NineBox8, NineBox9]

function check4Winner() {
    let redCount = 0
    let yellowCount = 0
    let blueCount = 0
    let greenCount = 0
    for (let i = 0; i < FourBoxArray.length; i++) {
        if (FourBoxArray[i].style.backgroundColor == 'red') {
            redCount++
        } else if (FourBoxArray[i].style.backgroundColor == 'yellow') {
            yellowCount++
        } else if (FourBoxArray[i].style.backgroundColor == 'blue') {
            blueCount++
        } else if (FourBoxArray[i].style.backgroundColor == 'green') {
            greenCount++
        }
    }
    if (redCount == 4) {
        setTimeout(function () {
            alert('You won!!!')
        }, 100);
        let winSound = new Audio("./DemonSlayerSounds.mp3")
        winSound.volume = 0.5;
        winSound.play();
        NineBoxes.style.display = 'flex';
        FourBoxes.style.display = 'none';
    }
    if (yellowCount == 4) {
        setTimeout(function () {
            alert('You won!!!')
        }, 100);
        let winSound = new Audio("./DemonSlayerSounds.mp3")
        winSound.volume = 0.5;
        winSound.play();
    }
    if (greenCount == 4) {
        setTimeout(function () {
            alert('You won!!!')
        }, 100);
        let winSound = new Audio("./DemonSlayerSounds.mp3")
        winSound.volume = 0.5;
        winSound.play();
    }
    if (blueCount == 4) {
        setTimeout(function () {
            alert('You won!!!')
        }, 100);
        let winSound = new Audio("./DemonSlayerSounds.mp3")
        winSound.volume = 0.5;
        winSound.play();
    }
}

function check9Winner() {
    let redCount = 0
    let yellowCount = 0
    let blueCount = 0
    let greenCount = 0
    for (let i = 0; i < NineBoxArray.length; i++) {
        if (NineBoxArray[i].style.backgroundColor == 'red') {
            redCount++
        } else if (NineBoxArray[i].style.backgroundColor == 'yellow') {
            yellowCount++
        } else if (NineBoxArray[i].style.backgroundColor == 'blue') {
            blueCount++
        } else if (NineBoxArray[i].style.backgroundColor == 'green') {
            greenCount++
        }
    }
    if (redCount == 9) {
        setTimeout(function () {
            alert('You won!!!')
        }, 100);
        let winSound = new Audio("./DemonSlayerSounds.mp3")
        winSound.volume = 0.5;
        winSound.play();
    }
    if (yellowCount == 9) {
        setTimeout(function () {
            alert('You won!!!')
        }, 100);
        let winSound = new Audio("./DemonSlayerSounds.mp3")
        winSound.volume = 0.5;
        winSound.play();
    }
    if (greenCount == 9) {
        setTimeout(function () {
            alert('You won!!!')
        }, 100);
        let winSound = new Audio("./DemonSlayerSounds.mp3")
        winSound.volume = 0.5;
        winSound.play();
    }
    if (blueCount == 9) {
        setTimeout(function () {
            alert('You won!!!')
        }, 100);
        let winSound = new Audio("./DemonSlayerSounds.mp3")
        winSound.volume = 0.5;
        winSound.play();
    }
}