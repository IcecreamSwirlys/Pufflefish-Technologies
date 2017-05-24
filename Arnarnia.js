//alert("CONNECTED!");

var menuButton = document.getElementById('MenuButton');
var navigation = document.getElementById('Navigation');
var HamTop = document.getElementById('TopSandwich');
var HamMid = document.getElementById('MidSandwich');
var HamBot = document.getElementById('BotSandwich');
var menuP = document.querySelectorAll("div#Navigation a");

var archerButton = document.getElementById('archerButton');
var archerBubble = document.getElementById('archerBubble');
var archerBubblePullOut = document.getElementById('archerBubblePullOut');
var archerBubbleDescription = document.getElementById('archerBubbleDescription');
var archerChevron = document.getElementById('archerChevron');
var archerOut = false;

var naVis = false;

menuButton.addEventListener("click", function(){
	//test if navigation is visible
	if (naVis === true){
		//if it is, then make it invisible
		navigation.style.opacity = '0'
		naVis = false;

		//change cursor
		for(var i=0; i < menuP.length; i++){
			menuP[i].style.cursor = 'default';
		}

	} else if (naVis === false) {
		//if it isn't, then make it visible
		navigation.style.opacity = '1'
		naVis = true;

		//change cursor
		for(var i=0; i < menuP.length; i++){
			menuP[i].style.cursor = 'pointer';
		}

	} else {
		//else log an error
		console.log("naVis = " + naVis);
	}


	//play animation
	HamTop.classList.toggle('played');
	HamMid.classList.toggle('played');
	HamBot.classList.toggle('played');
})

archerButton.addEventListener("click", function(){
	if (archerOut === false){
		archerBubbleDescription.style.right = '1000px';
		archerBubble.style.right = '980px';
		archerBubblePullOut.style.right = '0px';

		archerChevron.classList.toggle('out');

		archerOut = true;
	} else {
		archerBubbleDescription.style.right = '0px';
		archerBubble.style.right = '-20px';
		archerBubblePullOut.style.right = '-1000px';
		archerOut = false;

		archerChevron.classList.toggle('out');
	}
})