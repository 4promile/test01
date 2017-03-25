


var canvas = document.getElementById("canvasPomoc");
var ctxPomoc=canvas.getContext("2d");





	var pomocFl = false;

function pomoc(){
	
	czyscPomoc();
	
	ctxPomoc.save();
	
	ctxPomoc.fillStyle = "red";
	ctxPomoc.font="30px Verdana";
	ctxPomoc.fillText("klatek na sekundę: "+ liczbaKlatekNaSekunde.wynik, 50,30);
	ctxPomoc.font="15px Verdana";
	ctxPomoc.fillText("najmniej klatek: "+ liczbaKlatekNaSekunde.najmniejKlatek, 50,55);
	
	ctxPomoc.fillText("pozycja pozioma statku (X): "+ statek.pozycjaPoziom, 50,90);
	ctxPomoc.fillText("pozycja pionowa statku (Y): "+ statek.pozycjaPion, 50,110);
	ctxPomoc.fillText("pozycja statku (nr kratki): "+ statek.pozycja, 50,135);
	
	ctxPomoc.fillText("sterowanie wDolStatekFl: "+ sterowanie.wDolStatekFl, 300,135);
	
	ctxPomoc.fillText("nr trasy: "+ trasyPlanszy.nrTrasy, 50,160);
	ctxPomoc.fillText("nr z pozycji trasy: "+ trasyPlanszy.wysokoscTrasy[trasyPlanszy.nrTrasy], 160,160);
	
	//ctxPomoc.fillText(decyzjaDane.takFl, 120,190);
	ctxPomoc.restore();
	
	liczbaKlatekNaSekunde.ladujTabliceWynikow(80);
	
}

function czyscPomoc(){
	ctxPomoc.fillRect(0,0,canvasPomoc.width, canvasPomoc.height);
}





var liczbaKlatekNaSekunde = {
	
		poprzedniCzas: 1,
		roznicaCzasu: 1,
		wynik: 1,
		licznikKlatek: 0,
		najmniejKlatek: 60,
		
		
		oblicz: function(czasArg){
		
			this.roznicaCzasu = czasArg - this.poprzedniCzas;
			this.poprzedniCzas = czasArg;
			this.wynik = Math.round(1000/this.roznicaCzasu);
		
		},
	
		pokazNajmniejKlatek:	function(liczbaKlatek){
			
			if (this.licznikKlatek<liczbaKlatek) {
				
				this.licznikKlatek++;
				
				if (this.najmniejKlatek>this.wynik) {this.najmniejKlatek = this.wynik;}
				
			}	else {this.licznikKlatek = 0; this.najmniejKlatek = 60;}
			
		},
		
		
		rysujSlupek:	function(pozycjaX, pozycjaY, szerokoscSlupka, wysokoscSlupka){
			
			ctxPomoc.save();
			ctxPomoc.fillStyle = "red";
			ctxPomoc.fillRect(pozycjaX, pozycjaY, szerokoscSlupka, wysokoscSlupka);
			ctxPomoc.restore();
			
		},
	
		tablicaWynikow:	[],
		licznikTablicyWynikow:	0,
		ladujTabliceWynikow:	function(dlugoscTablicyWynikow){
			
			
				this.tablicaWynikow[this.licznikTablicyWynikow] = this.wynik;
				this.licznikTablicyWynikow++;
				if (this.licznikTablicyWynikow>=dlugoscTablicyWynikow) this.licznikTablicyWynikow=0;
				
			
			for (var i=0; i<this.tablicaWynikow.length; i++){
				this.rysujSlupek(440-i*3,45,2,0.4*this.tablicaWynikow[i]);
			}
			
		},
		
	}
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	