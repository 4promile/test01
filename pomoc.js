


var canvas = document.getElementById("canvasPomoc");
var ctxPomoc=canvas.getContext("2d");





var pomocFl = false;


function pomoc(){
	
	czyscPomoc();
	
	ctxPomoc.save();
	
	ctxPomoc.fillStyle = "red";
	ctxPomoc.font="40px Verdana";
	ctxPomoc.fillText("ilość klatek: "+ liczbaKlatekNaSekunde.wynik, 120,60);
	
	//ctxPomoc.fillText(decyzjaDane.takFl, 120,190);
	ctxPomoc.restore();
	
}

function czyscPomoc(){
	ctxPomoc.fillRect(0,0,canvasPomoc.width, canvasPomoc.height);
}