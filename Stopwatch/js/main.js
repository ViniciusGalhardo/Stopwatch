var sec = 0
var min = 0
var interval

function start(){
    watch()
    interval = setInterval(watch,1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    min = 0
    sec = 0
    document.getElementById('time').innerText ='00:00'
}

function watch(){
    sec++
    if(sec == 60){
        min++
        sec = 0
    }
    document.getElementById('time').innerText = twoDigits(min) + ':' + twoDigits(sec)
}

function twoDigits(digit){
    if(digit < 10){
        return('0' + digit)
    }
}