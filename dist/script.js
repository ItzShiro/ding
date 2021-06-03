var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');
var line4 = document.querySelector('.line4');

var volumeValue = document.getElementById("volume");

var player = document.getElementById('player');
//Not shit u wanna use

var Android = /(android)/i.test(navigator.userAgent);

isLoop = false;

function onStart() {
  player.currentTime -= 0.1;
}

function volFunc() {
  if (volumeValue.value < 25) { line1.style.background = "transparent"; }
  else { line1.style.background = "black"; }

  if (volumeValue.value < 50) { line2.style.opacity = "20%"; }
  else { line2.style.opacity = "100%"; }

  if (volumeValue.value < 75) { line3.style.opacity = "20%"; }
  else { line3.style.opacity = "100%"; }

  if (volumeValue.value < 95) { line4.style.opacity = "20%"; }
  else { line4.style.opacity = "100%"; }
}

document.body.addEventListener("keyup", function (event) {
  if (event.keyCode === 39) {
    player.currentTime += 5.0;
  }
});

document.body.addEventListener("keyup", function (event) {
  if (event.keyCode === 37) {
    player.currentTime -= 5.0;
  }
});

document.body.addEventListener("keyup", function (event) {
  if (event.keyCode === 32) {
    isPlaying ? player.pause() : player.play();
    document.querySelector('.playPauseButton').classList.toggle('active');
  }
});

document.body.addEventListener("keyup", function (event) {
  if (event.keyCode === 76) {
    loopIcon()
  }
});

setInterval(function () {
  volFunc();
  musicTime = player.currentTime;

  mainDurr = player.duration;

  songPercentage = musicTime / mainDurr * 100;

  document.querySelector('.ball').style.marginLeft = songPercentage + "%";
  volumeValChanged = volumeValue.value / 100;

  document.getElementById('volumeValChangedTest').innerHTML = volumeValChanged;

  player.volume = volumeValChanged;

  if (player.ended == true) {
    isPlaying = false;
    document.querySelector('.playPauseButton').classList.remove('active');
  }

  if (isLoop == true) {
    player.loop = true;
  } else {
    player.loop = false;
  }

  if (Android) {
    document.body.classList.add('mobileTrue');
    if(screen.availHeight > screen.availWidth){
      alert("Please use Landscape!(CUZ IM TOO LAZY TO REPAIR THIS SHIT K?)");
    }
  }
  
}, 32);

var isPlaying = false;

function playPause() {
  document.querySelector('.playPauseButton').classList.toggle('active');
  isPlaying ? player.pause() : player.play();
}

player.onplaying = function () {
  isPlaying = true;
};
player.onpause = function () {
  isPlaying = false;
};

function devInfo() {
  console.log('=============Dev Test Info============');
  console.log("volume:" + document.getElementById("volume").value);
  console.log("duration:" + player.duration);
  console.log("volumeChanged:" + volumeValChanged);
  console.log("currentTime:" + player.currentTime);
  console.log("isPlaying:" + isPlaying);
  console.log("isLoop:" + isLoop);
  console.log('');
}

function loopIcon() {
  document.querySelector('.loopIcon').classList.toggle('active');
  isLoop = !isLoop;
}

function updateTrackTime(track) {
  var currTimeDiv = document.getElementById('currTime');
  var durationDiv = document.getElementById('durationTime');

  var currTime = Math.floor(track.currentTime).toString();
  var duration = Math.floor(track.duration).toString();

  currTimeDiv.innerHTML = formatSecondsAsTime(currTime);
  durationDiv.innerHTML = formatSecondsAsTime(duration);


}

function formatSecondsAsTime(secs, format) {
  var hr = Math.floor(secs / 3600);
  var min = Math.floor((secs - (hr * 3600)) / 60);
  var sec = Math.floor(secs - (hr * 3600) - (min * 60));

  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  return min + ':' + sec;
}


function scrub(e){
  const scrubTime = (e.offsetX / document.getElementById('timeLine').offsetWidth ) * player.duration;
  player.currentTime = scrubTime;
  console.log(e)
  if(e.altKey & e.ctrlKey == true){
    devInfo();
  }
}

document.getElementById('timeLine').addEventListener('click', scrub)

//i know it looks funneh but y kno, im dumb and i dont know how to make it better :P


//LICENSE: IDFCPL
//LINK: https://github.com/ItzShittyPaper/IDFCPL
//Cuz i dont fucking care
