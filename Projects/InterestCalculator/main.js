function fRechne() {
	let vJahr = 0;
	let startkapital;
	let vZinssatz;
	let vLaufzeit;
	let vZinsen;
	let vEndkapital;
	let result="";
	
	
	startkapital = parseFloat(document.getElementById("idStartkapital").value);
	vZinssatz = parseFloat(document.getElementById("idZinssatz").value);
	vLaufzeit = parseFloat(document.getElementById("idLaufzeit").value);


	result = result + "<table border = 1>";
	result = result + "<tr><th>Jahr</th><th>Jahresstartkapital</th><th>Zinsen</th><th>Jahresendkapital</th></tr>" + "<br>";
	
	
	while (vJahr <= vLaufzeit) {
		
		vZinsen = startkapital * vZinssatz / 100;
		vEndkapital = startkapital + vZinsen;
		result = 	
					result + "<tr><td>"+ vJahr +"</td><td>" + 
					startkapital.toFixed(2).replace(".", ",") +" €</td><td>" + 
					vZinsen.toFixed(2).replace(".", ",") +" €</td><td>" + 
					vEndkapital.toFixed(2) +" €</td></tr>";

		startkapital = vEndkapital;
		
		vJahr++;
	}
	
	result = result + "</table>";
					  
	document.getElementById("idAusgabe").innerHTML = result;
}