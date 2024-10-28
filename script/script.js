const randomInt = (min, max) => {
    return Math.random() * (max - min) + min;
}

let noButton_i = 0;
const noButton = () => {
    noButton_i++;

    document.getElementById("yesButton").style.fontSize = (20 + noButton_i*20 + "px");

    let noButton = document.getElementById("noButton");
    let susEmojiImg = document.getElementById("susEmoji");
    let susSound = new Audio('./media/sus.mp3');

    noButton.style.position = "absolute";
    noButton.style.top = (randomInt(0, (window.innerHeight-153)) + "px");
    noButton.style.left = (randomInt(0, (window.innerWidth-140)) + "px");

    if(noButton_i > 2) {
        if(noButton_i % 3 == 0)
            noButton.innerHTML = "no ej...";
        if(noButton_i % 3 == 1)
            noButton.innerHTML = "fr?";
        if(noButton_i % 4 == 2)
            noButton.innerHTML = "czm nie chcesz?";
    }

    susEmojiImg.style.top = (randomInt(0, (window.innerHeight-153)) + "px");
    susEmojiImg.style.left = (randomInt(0, (window.innerWidth-140)) + "px");
    susEmojiImg.style.transform = "rotate(" + randomInt(-30, 30) + "deg)";
    susEmojiImg.style.width = 5 + noButton_i + "vw";
    susEmojiImg.style.height = 5 + noButton_i + "vw";
    susEmojiImg.style.opacity = 1;

    setTimeout(function() {
        susEmojiImg.style.opacity = 0;
    }, 1000);

    if(noButton_i < 10) {
        susSound.volume = 0.1 * noButton_i;
    }

    console.log(susSound.volume);

    susSound.play();
}

const selectOption = (val) => {
    let entry = {
        date: new Date(),
        choice: val
    };

    const stringEntry = JSON.stringify(entry);
}