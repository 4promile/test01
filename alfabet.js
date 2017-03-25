
	
	
	var alfabet = {
	
		szerokoscLitery: 0,
		odstepLiter: 1,
		
		litera:	function(litera, pozycja, wartoscKoloruPola, szerokoscPol){

		
		
			switch(litera) {
				
				case "A":
				case "a":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2*szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3*szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4*szerokoscPol+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3*szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2*szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2*szerokoscPol+1], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 3;
					break;
					
					
					
				case "B":
				case "b":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2*szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3*szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4*szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4*szerokoscPol+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4*szerokoscPol+2], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4*szerokoscPol+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3*szerokoscPol+3], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2*szerokoscPol+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2*szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2*szerokoscPol+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+3], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;
					
				
				
				case "C":
				case "c":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2*szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3*szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4*szerokoscPol+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4*szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4*szerokoscPol+3], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3*szerokoscPol+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+4], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;
					
				
				
				case "D":
				case "d":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+3], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;
					
					
					
				case "E":
				case "e":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+1], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 3;
					break;
					
					
					
				case "F":
				case "f":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+1], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 3;
					break;
					
					
					
				case "G":
				case "g":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+4], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;
				
					
					
				case "H":
				case "h":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;
					
					
					
				case "I":
				case "i":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 1;
					break;
					
					
					
				case "J":
				case "j":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					//gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;
					
					
					
				case "K":
				case "k":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break
					
					
					
				case "L":
				case "l":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 3;
					break;
					
					
					
				case "M":
				case "m":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 5;
					break;
					
					
					
				case "N":
				case "n":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*1+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+4], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 5;
					break;


					
				case "O":
				case "o":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;


					
				case "P":
				case "p":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+1], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;
					
					
					
				case "R":
				case "r":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;
					
					

				case "S":
				case "s":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;				
					
					
					
				case "T":
				case "t":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+4], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 5;
					break;	
					
					
					
				case "U":
				case "u":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 4;
					break;	
					
				
				
				case "W":
				case "w":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+4], [wartoscKoloruPola]);
					
					this.szerokoscLitery = 5;
					break;	
					
					
					
				case "Y":
				case "y":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+4], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					
					
					this.szerokoscLitery = 5;
					break;	
					
					
					
				case "Z":
				case "z":
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*2+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*3+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+3], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+2], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4+1], [wartoscKoloruPola]);
					gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[pozycja+szerokoscPol*4], [wartoscKoloruPola]);
					
					
					this.szerokoscLitery = 5;
					break;
					
					
				
				case " ":					
					
					this.szerokoscLitery = 1;
					break;
				
				
				
				
				default:
					break;
			}
			
			
		},
		
		
		
		
		
		
		
		
		zdanie:	function(zdanie, pozycja, nrKoloru, szerokoscPol){
			
			var tymczasowaZmiennaPozycjiLiterwZdaniu = pozycja;
			
			for (var i=0; i<zdanie.length; i++){
				
				this.litera(zdanie[i], tymczasowaZmiennaPozycjiLiterwZdaniu, nrKoloru, szerokoscPol);
				tymczasowaZmiennaPozycjiLiterwZdaniu += this.szerokoscLitery+this.odstepLiter;
				
			}
			
		},
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	}