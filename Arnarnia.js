//alert("CONNECTED!");

var menuButton = document.getElementById('MenuButton');
var navigation = document.getElementById('Navigation');
var HamTop = document.getElementById('TopSandwich');
var HamMid = document.getElementById('MidSandwich');
var HamBot = document.getElementById('BotSandwich');
var menuP = document.querySelectorAll("div#Navigation a");

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

