let colors = ['yellow', 'red', 'green', 'orange']

const fireWorks = document.getElementById('fireWorks')
const FourBoxes = document.getElementById('FourBoxes')
const NineBoxes = document.getElementById('NineBoxes');
const SixteenBoxes = document.getElementById('SixteenBoxes');
const TwentyFiveBoxes = document.getElementById('TwentyFiveBoxes');

// modal stuff
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
       win4u();
    }
}



fireWorks.style.display = 'none';
NineBoxes.style.display = 'none';
SixteenBoxes.style.display = 'none';
TwentyFiveBoxes.style.display = 'none';

Lv2.style.display = 'none';
Lv3.style.display = 'none';
Lv4.style.display = 'none';

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

TwentyFiveBox1.addEventListener('click', setRandom25Color)
TwentyFiveBox2.addEventListener('click', setRandom25Color)
TwentyFiveBox3.addEventListener('click', setRandom25Color)
TwentyFiveBox4.addEventListener('click', setRandom25Color)
TwentyFiveBox5.addEventListener('click', setRandom25Color)
TwentyFiveBox6.addEventListener('click', setRandom25Color)
TwentyFiveBox7.addEventListener('click', setRandom25Color)
TwentyFiveBox8.addEventListener('click', setRandom25Color)
TwentyFiveBox9.addEventListener('click', setRandom25Color)
TwentyFiveBox10.addEventListener('click', setRandom25Color)
TwentyFiveBox11.addEventListener('click', setRandom25Color)
TwentyFiveBox12.addEventListener('click', setRandom25Color)
TwentyFiveBox13.addEventListener('click', setRandom25Color)
TwentyFiveBox14.addEventListener('click', setRandom25Color)
TwentyFiveBox15.addEventListener('click', setRandom25Color)
TwentyFiveBox16.addEventListener('click', setRandom25Color)
TwentyFiveBox17.addEventListener('click', setRandom25Color)
TwentyFiveBox18.addEventListener('click', setRandom25Color)
TwentyFiveBox19.addEventListener('click', setRandom25Color)
TwentyFiveBox20.addEventListener('click', setRandom25Color)
TwentyFiveBox21.addEventListener('click', setRandom25Color)
TwentyFiveBox22.addEventListener('click', setRandom25Color)
TwentyFiveBox23.addEventListener('click', setRandom25Color)
TwentyFiveBox24.addEventListener('click', setRandom25Color)
TwentyFiveBox25.addEventListener('click', setRandom25Color)

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

function setRandom25Color(event) {
    let randomNum = Math.floor(Math.random() * colors.length);
    if (colors[randomNum] == event.target.style.backgroundColor) {
        setRandom25Color(event);
    } else {
        event.target.style.backgroundColor = colors[randomNum];
        check25Winner();
    }
};

let FourBoxArray = [FourBox1, FourBox2, FourBox3, FourBox4]
let NineBoxArray = [NineBox1, NineBox2, NineBox3, NineBox4, NineBox5, NineBox6, NineBox7, NineBox8, NineBox9]
let SixteenBoxArray = [SixteenBox1, SixteenBox2, SixteenBox3, SixteenBox4, SixteenBox5, SixteenBox6, SixteenBox7, SixteenBox8, SixteenBox9, SixteenBox10, SixteenBox11, SixteenBox12, SixteenBox13, SixteenBox14, SixteenBox15, SixteenBox16]
let TwentyFiveBoxArray = [TwentyFiveBox1, TwentyFiveBox2, TwentyFiveBox3, TwentyFiveBox4, TwentyFiveBox5, TwentyFiveBox6, TwentyFiveBox7, TwentyFiveBox8, TwentyFiveBox9, TwentyFiveBox10, TwentyFiveBox11, TwentyFiveBox12, TwentyFiveBox13, TwentyFiveBox14, TwentyFiveBox15, TwentyFiveBox16, TwentyFiveBox17, TwentyFiveBox18, TwentyFiveBox19, TwentyFiveBox20, TwentyFiveBox21, TwentyFiveBox22, TwentyFiveBox23, TwentyFiveBox24, TwentyFiveBox25]

function u4Win() {
    const audio = document.querySelector("#DSS");
    audio.play();
    setTimeout(function () {
        const confirmBox = confirm('Level 1 Complete!');
        if (confirmBox == true) {
            audio.pause();
            audio.currentTime = 0;
            NineBoxes.style.display = 'flex';
            FourBoxes.style.display = 'none';
            Lv2.style.display = 'flex';
            Lv1.style.display = 'none';
        }
    }, 200)
}

function u9Win() { 
    const audio = document.querySelector("#DSS");
        audio.play();
        setTimeout(function () {
            const confirmBox = confirm('Level 2 Complete!');
            if (confirmBox == true) {
                audio.pause();
                audio.currentTime = 0;
                SixteenBoxes.style.display = 'flex';
                NineBoxes.style.display = 'none';
                Lv3.style.display = 'flex';
                Lv2.style.display = 'none';
            }
        }, 200)
}

function check4Winner() {
    let redCount = 0
    let yellowCount = 0
    let orangeCount = 0
    let greenCount = 0
    for (let i = 0; i < FourBoxArray.length; i++) {
        if (FourBoxArray[i].style.backgroundColor == 'red') {
            redCount++
        } else if (FourBoxArray[i].style.backgroundColor == 'yellow') {
            yellowCount++
        } else if (FourBoxArray[i].style.backgroundColor == 'orange') {
            orangeCount++
        } else if (FourBoxArray[i].style.backgroundColor == 'green') {
            greenCount++
        }
    }
    if (redCount === 4 || yellowCount === 4 || greenCount === 4 || orangeCount === 4)
        u4Win();
}

function check9Winner() {
    let redCount = 0
    let yellowCount = 0
    let orangeCount = 0
    let greenCount = 0
    for (let i = 0; i < NineBoxArray.length; i++) {
        if (NineBoxArray[i].style.backgroundColor == 'red') {
            redCount++
        } else if (NineBoxArray[i].style.backgroundColor == 'yellow') {
            yellowCount++
        } else if (NineBoxArray[i].style.backgroundColor == 'orange') {
            orangeCount++
        } else if (NineBoxArray[i].style.backgroundColor == 'green') {
            greenCount++
        }
    }
    if (redCount == 9 || yellowCount == 9 || greenCount == 9 || orangeCount == 9) {
        u9Win();
    }
}

function check16Winner() {
    let redCount = 0
    let yellowCount = 0
    let orangeCount = 0
    let greenCount = 0
    for (let i = 0; i < SixteenBoxArray.length; i++) {
        if (SixteenBoxArray[i].style.backgroundColor == 'red') {
            redCount++
        } else if (SixteenBoxArray[i].style.backgroundColor == 'yellow') {
            yellowCount++
        } else if (SixteenBoxArray[i].style.backgroundColor == 'orange') {
            orangeCount++
        } else if (SixteenBoxArray[i].style.backgroundColor == 'green') {
            greenCount++
        }
    }
    if (redCount == 16) {
        const audio = document.querySelector("#DSS");
        audio.play();
        setTimeout(function () {
            const confirmBox = confirm('Level 3 Complete!');
            if (confirmBox == true) {
                audio.pause();
                audio.currentTime = 0;
                TwentyFiveBoxes.style.display = 'flex';
                SixteenBoxes.style.display = 'none';
                Lv4.style.display = 'flex';
                Lv3.style.display = 'none';
            }
        }, 200)
    }
    if (yellowCount == 16) {
        const audio = document.querySelector("#DSS");
        audio.play();
        setTimeout(function () {
            const confirmBox = confirm('Level 3 Complete!');
            if (confirmBox == true) {
                audio.pause();
                audio.currentTime = 0;
                TwentyFiveBoxes.style.display = 'flex';
                SixteenBoxes.style.display = 'none';
                Lv4.style.display = 'flex';
                Lv3.style.display = 'none';
            }
        }, 200)
    }
    if (greenCount == 16) {
        const audio = document.querySelector("#DSS");
        audio.play();
        setTimeout(function () {
            const confirmBox = confirm('Level 3 Complete!');
            if (confirmBox == true) {
                audio.pause();
                audio.currentTime = 0;
                TwentyFiveBoxes.style.display = 'flex';
                SixteenBoxes.style.display = 'none';
                Lv4.style.display = 'flex';
                Lv3.style.display = 'none';
            }
        }, 200)
    }
    if (orangeCount == 16) {
        const audio = document.querySelector("#DSS");
        audio.play();
        setTimeout(function () {
            const confirmBox = confirm('Level 3 Complete!');
            if (confirmBox == true) {
                audio.pause();
                audio.currentTime = 0;
                TwentyFiveBoxes.style.display = 'flex';
                SixteenBoxes.style.display = 'none';
                Lv4.style.display = 'flex';
                Lv3.style.display = 'none';
            }
        }, 200)
    }
}

function check25Winner() {
    let redCount = 0
    let yellowCount = 0
    let orangeCount = 0
    let greenCount = 0
    for (let i = 0; i < TwentyFiveBoxArray.length; i++) {
        if (TwentyFiveBoxArray[i].style.backgroundColor == 'red') {
            redCount++
        } else if (TwentyFiveBoxArray[i].style.backgroundColor == 'yellow') {
            yellowCount++
        } else if (TwentyFiveBoxArray[i].style.backgroundColor == 'orange') {
            orangeCount++
        } else if (TwentyFiveBoxArray[i].style.backgroundColor == 'green') {
            greenCount++
        }
    }
    if (redCount == 25) {
        const audio = document.querySelector("#DSS");
        audio.play();
        setTimeout(function () {
            const confirmBox = confirm('Level 4 Complete!, Would you like to play again?');
            if (confirmBox == true) {
                audio.pause();
                audio.currentTime = 0;
                window.location.reload();
            }
        }, 200)
    }
    if (yellowCount == 25) {
        const audio = document.querySelector("#DSS");
        audio.play();
        setTimeout(function () {
            const confirmBox = confirm('Level 4 Complete!, Would you like to play again?');
            if (confirmBox == true) {
                audio.pause();
                audio.currentTime = 0;
                window.location.reload();
            }
        }, 200)
    }
    if (greenCount == 25) {
        const audio = document.querySelector("#DSS");
        audio.play();
        setTimeout(function () {
            const confirmBox = confirm('Level 4 Complete! Would you like to play again?');
            if (confirmBox == true) {
                audio.pause();
                audio.currentTime = 0;
                window.location.reload();
            }
        }, 200)
    }
    if (orangeCount == 25) {
        const audio = document.querySelector("#DSS");
        audio.play();
        setTimeout(function () {
            const confirmBox = confirm('Level 4 Complete! Would you like to play again?');
            if (confirmBox == true) {
                audio.pause();
                audio.currentTime = 0;
                window.location.reload();
            }
        }, 200)
    }
}