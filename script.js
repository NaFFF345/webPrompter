var start = new Date();

var script = new Vue({
    el: "#speakScript",
    data: {
        sentence: "賑やかすぎる 街の音",
        sentence2: "あれこれ感情は スクランブル"
    }
});
var title = new Vue({
    el: "#title",
    data: {
        title: "セツナ Ring a Bell"
    }
});
var timerChar = new Vue({
    el: "#timerChar",
    data: {
        second: timerSec
    }
});

function changeTitle() {
    var maaya = "Shiny Drive Moony Dive";
    title.title = maaya;
}

function maayaTimer() {
    nowTime = new Date();
    if (nowTime - start >= 2000) {
        changeTitle();
    }
}

setInterval(maayaTimer, 1000);
