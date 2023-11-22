var timer = 60;
var hitnum = 0;
var clutter = " ";
var score = 0;
var HittingNum;
var rnum;

function makebubbles() {
    clutter = ""; 
    for (var i = 1; i <= 120; i++) {
        rnum = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rnum}</div>`;
    }
    document.querySelector(".down").innerHTML = clutter;
}
makebubbles();

function clock() {
    var intervalId = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").innerHTML = timer;
        } else {
            clearInterval(intervalId);
            document.querySelector(".down").innerHTML = `<h1 id="over" >Game Over</h1>`;
        }
    }, 1000);
}
clock();

function Changehit() {
    hitnum = Math.floor(Math.random() * 10);
    document.querySelector("#hnum").innerHTML = hitnum;
}
Changehit();

function increasescore() {
    score += 10;
    document.querySelector("#score").innerHTML = score;
}

document.querySelector(".down").addEventListener("click", function (details) {
    HittingNum = Number(details.target.innerText);
    if (hitnum === HittingNum) {
        increasescore();
        makebubbles();
        Changehit();
    }
});
