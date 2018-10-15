var timerBody = document.getElementById("timerContents");
var initWidth = timerBody.clientWidth;
var style = timerBody.style;
var timer = 3;

function timerStart() {
    var nowWidth = timerBody.clientWidth;
    var width10 = initWidth * 0.1;
    style.width = nowWidth - 30 + "px";
    if (width10 >= nowWidth) {
        style.background = "yellow";
    }

    if (0 >= timer) {
        clearInterval(timerTrig);
    }
    timer--;
}
var timerTrig = setInterval(timerStart, 1000);

// ユニットテスト
//timerStart();
