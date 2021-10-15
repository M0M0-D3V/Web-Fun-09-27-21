javascript: 
var time = prompt("How many minutes?");
time = parseFloat(time);
if (time) { 
    setTimeout(function () { new Audio("https://freesound.org/data/previews/446/446127_758593-lq.mp3").play(); console.log("Timer is Up!");}, time * 60000);
}

javascript:
var v = document.querySelector('video');
var t = prompt('Set the playback rate');
v.playbackRate = parseFloat(t)