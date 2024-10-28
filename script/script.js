const randomInt = (min, max) => {
    return Math.random() * (max - min) + min;
}

let noButton_i = 0;
const noButton = () => {
    noButton_i++;

    document.getElementById("yesButton").style.fontSize = (20 + noButton_i*20 + "px");

    let noButton = document.getElementById("noButton");

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
}