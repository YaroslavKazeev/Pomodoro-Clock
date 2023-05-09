let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');

let wlen = document.querySelector("#sessionlen");
let blen = document.querySelector("#breaklength");

let wm = document.getElementById('w_minutes');
let ws = document.getElementById('w_seconds');
let bm = document.getElementById('b_minutes');
let bs = document.getElementById('b_seconds');

wlen.value = localStorage.getItem("sessionlen");
blen.value = localStorage.getItem("breaklength");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("sessionlen", wlen.value);
  localStorage.setItem("breaklength", blen.value);
});

//store a reference to a timer variable
let startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

console.log(wlen.value)

reset.addEventListener('click', function(){
    wm.innerText = wlen.value;
    ws.innerText = "00";

    bm.innerText = blen.value;
    bs.innerText = "00";

    stopInterval()
    startTimer = undefined;
})

pause.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }
    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Reset if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = wlen.value;
        ws.innerText = "00";

        bm.innerText = blen.value;
        bs.innerText = "00";
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}