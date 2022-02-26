let colors = ['yellow', 'red', 'green', 'blue']

const FourBoxes = document.getElementById('FourBoxes');
const NineBoxes = document.getElementById('NineBoxes');
NineBoxes.style.display = 'none';
SixteenBoxes.style.display = 'none';

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

SixteenBox1.addEventListener('click', setRandom16Color)
SixteenBox2.addEventListener('click', setRandom16Color)
SixteenBox3.addEventListener('click', setRandom16Color)
SixteenBox4.addEventListener('click', setRandom16Color)
SixteenBox5.addEventListener('click', setRandom16Color)
SixteenBox6.addEventListener('click', setRandom16Color)
SixteenBox7.addEventListener('click', setRandom16Color)
SixteenBox8.addEventListener('click', setRandom16Color)
SixteenBox9.addEventListener('click', setRandom16Color)
SixteenBox10.addEventListener('click', setRandom16Color)
SixteenBox11.addEventListener('click', setRandom16Color)
SixteenBox12.addEventListener('click', setRandom16Color)
SixteenBox13.addEventListener('click', setRandom16Color)
SixteenBox14.addEventListener('click', setRandom16Color)
SixteenBox15.addEventListener('click', setRandom16Color)
SixteenBox16.addEventListener('click', setRandom16Color)

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

function setRandom16Color(event) {
    let randomNum = Math.floor(Math.random() * colors.length);
    if (colors[randomNum] == event.target.style.backgroundColor) {
        setRandom16Color(event);
    } else {
        event.target.style.backgroundColor = colors[randomNum];
        check16Winner();
    }
};

let FourBoxArray = [FourBox1, FourBox2, FourBox3, FourBox4]
let NineBoxArray = [NineBox1, NineBox2, NineBox3, NineBox4, NineBox5, NineBox6, NineBox7, NineBox8, NineBox9]
let SixteenBoxArray = [SixteenBox1, SixteenBox2, SixteenBox3, SixteenBox4, SixteenBox5, SixteenBox6, SixteenBox7, SixteenBox8, SixteenBox9, SixteenBox10, SixteenBox11, SixteenBox12, SixteenBox13, SixteenBox14, SixteenBox15, SixteenBox16]

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
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
        NineBoxes.style.display = 'flex';
        FourBoxes.style.display = 'none';
    }
    if (yellowCount == 4) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
        NineBoxes.style.display = 'flex';
        FourBoxes.style.display = 'none';
    }
    if (greenCount == 4) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
        NineBoxes.style.display = 'flex';
        FourBoxes.style.display = 'none';
    }
    if (blueCount == 4) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
        NineBoxes.style.display = 'flex';
        FourBoxes.style.display = 'none';
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
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
        SixteenBoxes.style.display = 'flex';
        NineBoxes.style.display = 'none';
    }
    if (yellowCount == 9) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
        SixteenBoxes.style.display = 'flex';
        NineBoxes.style.display = 'none';
    }
    if (greenCount == 9) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
        SixteenBoxes.style.display = 'flex';
        NineBoxes.style.display = 'none';
    }
    if (blueCount == 9) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
        SixteenBoxes.style.display = 'flex';
        NineBoxes.style.display = 'none';
    }
}

function check16Winner() {
    let redCount = 0
    let yellowCount = 0
    let blueCount = 0
    let greenCount = 0
    for (let i = 0; i < SixteenBoxArray.length; i++) {
        if (SixteenBoxArray[i].style.backgroundColor == 'red') {
            redCount++
        } else if (SixteenBoxArray[i].style.backgroundColor == 'yellow') {
            yellowCount++
        } else if (SixteenBoxArray[i].style.backgroundColor == 'blue') {
            blueCount++
        } else if (SixteenArray[i].style.backgroundColor == 'green') {
            greenCount++
        }
    }
    if (redCount == 16) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
    }
    if (yellowCount == 16) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
    }
    if (greenCount == 16) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
    }
    if (blueCount == 16) {
        document.getElementById('DSS').play();
        setTimeout(function () {
            alert('You won!!!')
        }, 200);
    }
}