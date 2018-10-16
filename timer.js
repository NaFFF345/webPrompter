var timerBody = document.getElementById("timerContents");
var initWidth = timerBody.clientWidth;
var style = timerBody.style;
var timerSec = 11;
var secWidth = initWidth / timerSec;

function timerStart() {
    // 残り時間が10秒なら黄色に変更
    if (11 >= timerSec) {
        style.background = "yellow";
    }

    timerSec--;
    nowWidth = timerBody.clientWidth;
    //プログレスバー
    style.width = nowWidth - secWidth + "px";
    timerChar.second = timerSec;
    // タイマーの停止
    if (0 >= timerSec) {
        style.width = "0";
        clearInterval(timerTrig);
    }
}

var timerTrig = setInterval(timerStart, 1000);
