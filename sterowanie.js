

function klawDown(e){
	
	var p = e.keyCode;

			
		if (p==38 || p==73 || p==87) {sterowanie.goraFl = true;}		//góra  I W
		if (p==68 || p==76 || p==39) {sterowanie.prawoFl = true;}		//prawo D L
		if (p==75 || p==40 || p==83) {sterowanie.dolFl = true;}			//dół K S
		if (p==65 || p==74 || p==37) {sterowanie.lewoFl = true;}		//lewo A J

}

function klawUp(e){
	
	var p = e.keyCode;
	
		if (p==38 || p==73 || p==87) {sterowanie.goraFl = false;}		//góra  I W
		if (p==68 || p==76 || p==39) {sterowanie.prawoFl = false;}		//prawo D L
		if (p==75 || p==40 || p==83) {sterowanie.dolFl = false;}			//dół K S
		if (p==65 || p==74 || p==37) {sterowanie.lewoFl = false;}		//lewo A J
		
}

document.addEventListener('keydown', klawDown);
document.addEventListener('keyup', klawUp);






	var sterowanie = {
		
		goraFl:		false,
		dolFl:		false,
		prawoFl:	false,
		lewoFl:		false,
		
		
		ruchStatkiem:	function(szerokoscPol, speed){
			
			//if (this.goraFl && statek.pozycjaPion<wartosciGlobalne.liczbaKratekGryPion-4)		statek.pozycja +=  szerokoscPol * speed;
			if (this.goraFl && statek.pozycjaPion<wartosciGlobalne.liczbaKratekGryPion-4 && !this.blokujSterowanieFl)		{this.doGoryStatekFl=true; this.blokujSterowanieFl=true;}
			//if (this.dolFl && statek.pozycjaPion>3)			statek.pozycja -=  szerokoscPol * speed;
			if (this.dolFl && statek.pozycjaPion>3 && !this.blokujSterowanieFl)			{this.wDolStatekFl = true; this.blokujSterowanieFl = true;}
			if (this.prawoFl && statek.pozycjaPoziom<wartosciGlobalne.liczbaKratekGryPoziom-2)		{statek.pozycja +=  1 * speed;}
			if (this.lewoFl && statek.pozycjaPoziom>3)		statek.pozycja -=  1 * speed;
			
			this.ruchStatkiem2(speed);
			trasyPlanszy.sprawdzNrTrasy(statek.pozycjaPion);
		},

		
		ruchStatkiemLicznik01:	0,
		
		doGoryStatekFl:	false,
		wDolStatekFl:	false,		
		
		blokujSterowanieFl:	false,
		
		ruchStatkiem2:	function(speed){
			
										
			if (this.doGoryStatekFl)	{	statek.pozycja += wartosciGlobalne.liczbaKratekGryPoziom * speed;
											if (trasyPlanszy.wysokoscTrasy[trasyPlanszy.nrTrasy+1]-1==statek.pozycjaPion)	{this.doGoryStatekFl=false; this.blokujSterowanieFl = false;};
										}
										
			if (this.wDolStatekFl)		{	statek.pozycja -= wartosciGlobalne.liczbaKratekGryPoziom * speed;
											if (trasyPlanszy.wysokoscTrasy[trasyPlanszy.nrTrasy]+1==statek.pozycjaPion)	{this.wDolStatekFl=false; this.blokujSterowanieFl = false;};
									}
										
		},
		
		
	};


