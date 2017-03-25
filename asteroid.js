


	var asteroid = {

		kolor:	1,
		
		rysuj:	function(pozycja, grubosc, kolor, szerokoscPol){
			
			var tymczasowaZmiennaObliczen = -(grubosc-1)/2;
			
			for (var i = 0; i<grubosc; i++){
				for (var j=0; j<grubosc; j++){
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja-(szerokoscPol*(tymczasowaZmiennaObliczen+i))+(tymczasowaZmiennaObliczen+j)], [kolor]);		//środek
				}
			}
			
		},
		
		
		
		tablicaAsteroid:	[],
		tworzTabliceAsteroidow:	function(liczbaAsteroid){
			for (var i=0; i<liczbaAsteroid; i++){
				this.tablicaAsteroid[i] = new this.nowyAsteroid(i,grubosc);
			}
		},
		
		nowyAsteroid:	function(numer, grubosc){
			this.nr = numer;
			
		}
		
	};
	
	