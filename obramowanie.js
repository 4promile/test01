
function obramowanie(szerokoscPol, wysokoscPol, gruboscObramowania, wartoscKoloruPola){

	var iloscPol = szerokoscPol * wysokoscPol;

		for (var i=0; i < iloscPol; i++){
			
			if (i>szerokoscPol*(wysokoscPol-gruboscObramowania) ||
				i<szerokoscPol*gruboscObramowania ||
				i%szerokoscPol<gruboscObramowania+1 ||
				i%szerokoscPol>szerokoscPol-gruboscObramowania){
					
				gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[i], [wartoscKoloruPola]);
				
				}
			
		}

}