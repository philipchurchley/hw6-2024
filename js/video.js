let video = document.getElementById("player1");
let vol = 1;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = vol * 100 + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Down");
	if (video.playbackRate * 0.9 >= 0.0625) {
		video.playbackRate *= 0.9;
	} else {
		video.playbackRate = 0.0625;
	}
	console.log("Video speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed Up");
	if (video.playbackRate / 0.9 <= 16) {
		video.playbackRate /= 0.9;
	} else {
		video.playbackRate = 16;
	}
	console.log("Video speed: " + video.playbackRate);
});

//video length (video.duration) is 67.4
document.querySelector("#skip").addEventListener("click", function () {
	console.log("skip");
	if (video.currentTime < video.duration - 10) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
		video.pause();
	}
	console.log("Video time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		video.volume = 0;
		console.log("Mute");
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		document.querySelector("#mute").innerHTML = "Mute";
		video.volume = vol;
		console.log("Unmute");
	}
});


document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});

document.querySelector("#slider").addEventListener("input", function () {
	vol = this.value / 100;
	document.querySelector("#volume").innerHTML = vol * 100 + "%";
	if (document.querySelector("#mute").innerHTML == "Mute") {
		video.volume = vol;
	}
	console.log("Volume: " + video.volume);
});
