

	var trasyPlanszy =	{

		krok01:	3,
		krok02:	4,
		
		znakTrasyFl:	true,
		
		wysokoscTrasy:	[],
		nrTrasy:	0,
		
		tworzTrasy:	function(){
			
			var tymczasowaZmiennaWysokosciTrasy = 0;
			
			for (var i=0; tymczasowaZmiennaWysokosciTrasy<wartosciGlobalne.liczbaKratekGryPion; i++){
				
				if (!i%2) this.wysokoscTrasy[i] = tymczasowaZmiennaWysokosciTrasy + this.krok01;
					
					else this.wysokoscTrasy[i]	= tymczasowaZmiennaWysokosciTrasy + this.krok02;
					
				tymczasowaZmiennaWysokosciTrasy = this.wysokoscTrasy[i];
				
			}
			
		},
		
		sprawdzNrTrasy:	function(pozycjaPionowaStatku){
			
			for (var i=0; i<this.wysokoscTrasy.length; i++){
			if (this.wysokoscTrasy[i]<=pozycjaPionowaStatku && this.wysokoscTrasy[i+1]>pozycjaPionowaStatku)	{this.nrTrasy = i;}
			}
			
			if (this.nrTrasy%2)	this.znakTrasyFl = true; else this.znakTrasyFl = false;
		}
		
	};
	
	
	trasyPlanszy.tworzTrasy();