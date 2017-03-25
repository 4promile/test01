	
	
	
	
	
	
	var vertexShaderText = 
	[
	"precision mediump float;",
	
	"uniform float tablicaPol[4000];",
	
	"attribute vec2 vertPosition;",	
	"attribute float vertColor;",
	
	"varying vec4 fragColor;",
	
	"int numerTablicyTemp;",
	
	
	
	"void main()",
	"{",
	"numerTablicyTemp = int(vertColor);",
	"if (tablicaPol[numerTablicyTemp] == 1.0) fragColor = vec4(0.48, 0.465, 0.664, 1.0);",
	"else if (tablicaPol[numerTablicyTemp] == 2.0) fragColor = vec4(0.28, 0.265, 0.264, 1.0);",
	"else fragColor = vec4(0.824, 0.863, 0.871, 1.0);",
	"	gl_Position = vec4(vertPosition, 0.0, 1.0);",
	"}"
	].join("\n");


	var fragmentShaderText =
	[
	"precision mediump float;",
	
	"varying vec4 fragColor;",
	"int temp;",	
	
	"void main()",
	"{",
	"gl_FragColor = fragColor;",
	"}"

	].join("\n");


	
	
	
	var canvas = document.getElementById("mycanvas");
	var gl = canvas.getContext("webgl");
	//gl.clearColor(0.75,0.45,0.8,1.0);
	gl.clearColor(0.824, 0.863, 0.871, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
		
	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
		
	gl.shaderSource(vertexShader, vertexShaderText);
	gl.shaderSource(fragmentShader, fragmentShaderText);
	
	gl.compileShader(vertexShader);	
	gl.compileShader(fragmentShader);
	
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);



	var triangleVertices = [];
	var triangleVertexBufferObject = gl.createBuffer();
	var positionAttribLocation = gl.getAttribLocation(program, "vertPosition");	
	var colorAttribLocation = gl.getAttribLocation(program, "vertColor");

	
	var iloscPunktowWbuforze = 0;
	
	
	function ladujTrojkatyPlanszy(iloscPolSzerokosc, iloscPolWysokosc, odstepXarg, odstepYarg, iloscTrojkatowNaPole, iloscDanychNaPunkt){
		
		
		var wysokoscCalegoPola = 2/iloscPolWysokosc;
		var szerokoscCalegoPola = 2/iloscPolSzerokosc;
		var bokAtrojkata =	wysokoscCalegoPola*(1-2*odstepYarg);
		var bokBtrojkata =	szerokoscCalegoPola*(1-2*odstepXarg);
		var bokCtrojkata =	Math.sqrt(bokAtrojkata^2 + bokBtrojkata^2);
		var iloscPol = 		iloscPolSzerokosc * iloscPolWysokosc;
		var iloscDanychNaPole = iloscTrojkatowNaPole * iloscDanychNaPunkt * 3;
		var odstepX = odstepXarg*2/iloscPolSzerokosc;
		var odstepY = odstepYarg*2/iloscPolWysokosc;
		
		var iloscPunktowWbuforzeTemp = iloscPol*iloscDanychNaPole;
		
		var zmienRzadX = 0;
		var przesunX = 0;
		var zmienRzadY = 0;
		var przesunY = 0;
		
		for (var i=0; i<iloscPol+1; i++){
			
			przesunX = zmienRzadX*szerokoscCalegoPola;
			przesunY = zmienRzadY*wysokoscCalegoPola;
			
			triangleVertices[i*iloscDanychNaPole]=-1+odstepX+przesunX;
			triangleVertices[i*iloscDanychNaPole+1]=-1+odstepY+bokAtrojkata+przesunY;
			triangleVertices[i*iloscDanychNaPole+2]=i;
			
			triangleVertices[i*iloscDanychNaPole+3]=-1+odstepX+przesunX
			triangleVertices[i*iloscDanychNaPole+4]=-1+odstepY+przesunY;
			triangleVertices[i*iloscDanychNaPole+5]=i;
			
			triangleVertices[i*iloscDanychNaPole+6]=-1+bokBtrojkata+odstepX+przesunX;
			triangleVertices[i*iloscDanychNaPole+7]=-1+odstepY+przesunY;
			triangleVertices[i*iloscDanychNaPole+8]=i;
			
			triangleVertices[i*iloscDanychNaPole+9]=-1+bokBtrojkata+odstepX+przesunX;
			triangleVertices[i*iloscDanychNaPole+10]=-1+odstepY+przesunY;
			triangleVertices[i*iloscDanychNaPole+11]=i;
			
			triangleVertices[i*iloscDanychNaPole+12]=-1+odstepX+przesunX;
			triangleVertices[i*iloscDanychNaPole+13]=-1+odstepY+bokAtrojkata+przesunY;
			triangleVertices[i*iloscDanychNaPole+14]=i;
			
			triangleVertices[i*iloscDanychNaPole+15]=-1+bokBtrojkata+odstepX+przesunX;
			triangleVertices[i*iloscDanychNaPole+16]=-1+odstepY+bokAtrojkata+przesunY;
			triangleVertices[i*iloscDanychNaPole+17]=i;
			
			zmienRzadX++;
			if (i%iloscPolSzerokosc<1) {zmienRzadX=0; if (i) zmienRzadY++;}
		}

		iloscPunktowWbuforze = triangleVertices.length/iloscDanychNaPunkt;
		
		
		gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);	
	
	
	
		gl.vertexAttribPointer(	
		
			positionAttribLocation,	
			2,
			gl.FLOAT,
			gl.FALSE,
			iloscDanychNaPunkt * Float32Array.BYTES_PER_ELEMENT,
			0
			
		);
		
		
		gl.vertexAttribPointer(	
		
			colorAttribLocation,
			1,	
			gl.FLOAT,	
			gl.FALSE,	
			iloscDanychNaPunkt * Float32Array.BYTES_PER_ELEMENT,	
			2 * Float32Array.BYTES_PER_ELEMENT	
			
		);
	
	
		gl.enableVertexAttribArray(positionAttribLocation);	
		gl.enableVertexAttribArray(colorAttribLocation);
		
		
		ladujTablicePunktowJS(this.iloscPol);
		
		wartosciGlobalne.liczbaKratekGryPoziom = iloscPolSzerokosc;
		wartosciGlobalne.liczbaKratekGryPion = iloscPolWysokosc;
	}



	
		
		
		

		
	
		
		
		
		var wskaznikTablicaPolJavaScript = gl.getUniformLocation(program, "tablicaPol[10]");
		var wartoscTablicaPolTempJavaScript = [];
		var wartoscTablicaPolTempJavaScriptWskazniki = [];
		var wartoscTablicaPolTempJavaScriptWskaznikiNazwa = [];
	
		function ladujTablicePunktowJS(rozmiarTablicy){
			
			for (var i=0; i<rozmiarTablicy; i++){
				wartoscTablicaPolTempJavaScript[i]=0;
				wartoscTablicaPolTempJavaScriptWskaznikiNazwa[i] = "tablicaPol["+i+"]";
				wartoscTablicaPolTempJavaScriptWskazniki[i]=gl.getUniformLocation(program, wartoscTablicaPolTempJavaScriptWskaznikiNazwa[i]);
			}
			
			wartoscTablicaPolTempJavaScript[111]=1;
			
		}
	
	
		function zerujTablicePunktowPlanszy(dlugoscTablicyArg){
			
			for (var i=0; i<dlugoscTablicyArg; i++){
				gl.uniform1fv(wartoscTablicaPolTempJavaScriptWskazniki[i],[0]);
			}
			
		}
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	ladujTrojkatyPlanszy(93, 43, 0.1, 0.1, 2, 3);		//(rozdzielczość w poziomie, rozdzielczość w pionie, przerwa między pikselami w poziomie, przerwa między pikselami w pionie, ilość trojkątów na pole, ilość punktów na trójkąt)
		
	
	
	gl.useProgram(program);	
	
	
	//gl.uniform1iv(wskaznikTablicaPolJavaScript, wartoscTablicaPolTempJavaScript);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



