/* Edit this file */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

function toggleVideoStatus(){
	if(video.paused){
		video.play();
	}
	else{
		video.pause(); 
	}
}
function updatePlayIcon(){
	if(video.paused){
		toggle.innerHTML= '<button class="player__button toggle" title="Toggle Play">❚❚</button>'
	}
	else{
		toggle.innerHTML= '<button class="player__button toggle" title="Toggle Play"> ► </button>'
	}
}
function updateProgress(){
	
}
 
video.addEventListener('click', toggleVideoStatus);
toggle.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon); 
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);