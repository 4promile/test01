

	var statek = {

		kolor:	1,
		
		pozycja:	288,
		pozycjaPion:	0,
		pozycjaPoziom:	0,
		pozycjaNrTrasy: 0,
		
		
		rysuj:	function(pozycja, szerokoscPol){
			
			this.funkcjaTransformacjiSkrzydel();
			
			//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+1], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol+1], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [this.kolor]);
			//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [this.kolor]);
			//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol*2], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol], [this.kolor]);
			//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol*2-1], [this.kolor]);
			//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol*2-2], [this.kolor]);
			//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol*3-1], [this.kolor]);
			//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2-1], [this.kolor]);
			//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2-2], [this.kolor]);
			//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3-1], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol-1], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol-1], [this.kolor]);

			this.rysujGorneSkrzydlo(pozycja, szerokoscPol);
			this.rysujDolneSkrzydlo(pozycja, szerokoscPol);
			
			this.transformujSkrzydla();
			
			
			
			this.resetujPozycjeSkrzydel();
			
			this.liczPozycje();
		},
		
		
		pozycjaGorneSkrzydloY:	2,
		pozycjaGorneSkrzydloX:	0,
		
		rysujGorneSkrzydlo:	function(pozycja, szerokoscPol){
			
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*this.pozycjaGorneSkrzydloY+this.pozycjaGorneSkrzydloX], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*this.pozycjaGorneSkrzydloY+this.pozycjaGorneSkrzydloX-1], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*(this.pozycjaGorneSkrzydloY+1)+this.pozycjaGorneSkrzydloX-1], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*this.pozycjaGorneSkrzydloY+this.pozycjaGorneSkrzydloX-2], [this.kolor]);
			
		},
		
		
		pozycjaDolneSkrzydloY:	2,
		pozycjaDolneSkrzydloX:	0,
		
		rysujDolneSkrzydlo:	function(pozycja, szerokoscPol){
			
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol*this.pozycjaDolneSkrzydloY+this.pozycjaDolneSkrzydloX], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol*this.pozycjaDolneSkrzydloY+this.pozycjaDolneSkrzydloX-1], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol*(this.pozycjaDolneSkrzydloY+1)+this.pozycjaDolneSkrzydloX-1], [this.kolor]);
			gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-szerokoscPol*this.pozycjaDolneSkrzydloY+this.pozycjaDolneSkrzydloX-2], [this.kolor]);
			
		},
		
		
		transformacjaKrok:	0,
		transformacjaKierunek:	-1,
		transformujSkrzydla:	function(){
		if (this.transformacjaKrok>0 && this.transformacjaKrok<3)	{this.pozycjaGorneSkrzydloX += this.transformacjaKierunek; this.pozycjaDolneSkrzydloX +=this.transformacjaKierunek;}
		else if (this.transformacjaKrok<5 && this.transformacjaKrok>2)	{this.pozycjaGorneSkrzydloY += this.transformacjaKierunek; this.pozycjaDolneSkrzydloY +=this.transformacjaKierunek;}
		else if (this.transformacjaKrok<7 && this.transformacjaKrok>4)	{this.pozycjaGorneSkrzydloX -= this.transformacjaKierunek; this.pozycjaDolneSkrzydloX -=this.transformacjaKierunek;};
		
		},
		
		
		funkcjaTransformacjiSkrzydel:	function(){
			//if (this.transformacjaKrok>0 && !sterowanie.prawoFl)	this.transformacjaKrok-=1;
			//else if (this.transformacjaKrok<7)	this.transformacjaKrok +=1;
			if (this.transformacjaKrok>=0 && this.transformacjaKrok<7 && sterowanie.prawoFl)	{this.transformacjaKierunek = -1; this.transformacjaKrok-=this.transformacjaKierunek;}
			if (this.transformacjaKrok>0 && !sterowanie.prawoFl)	{this.transformacjaKierunek = 1; this.transformacjaKrok -= this.transformacjaKierunek;}
		},
		
		resetujPozycjeSkrzydel:	function(){
			if (!this.transformacjaKrok && !sterowanie.prawoFl) {this.pozycjaGorneSkrzydloY=2; this.pozycjaGorneSkrzydloX=0; this.pozycjaDolneSkrzydloY=2; this.pozycjaDolneSkrzydloX=0;}
		},
		
		liczPozycje:	function(){
		
			this.pozycjaPion = Math.trunc(this.pozycja/wartosciGlobalne.liczbaKratekGryPoziom);	//Math.trunc usuwa ułamek
			this.pozycjaPoziom = (this.pozycja%wartosciGlobalne.liczbaKratekGryPoziom).toFixed(0);
		
		},
		
	};