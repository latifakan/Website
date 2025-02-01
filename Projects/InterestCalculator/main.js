function fRechne() {
	var vJahr = 0;
	var vStartkapital;
	var vZinssatz;
	var vLaufzeit;
	var vZinsen;
	var vEndkapital;
	var vAusgabe="";
	
	
	vStartkapital = parseFloat(document.getElementById("idStartkapital").value);
	vZinssatz = parseFloat(document.getElementById("idZinssatz").value);
	vLaufzeit = parseFloat(document.getElementById("idLaufzeit").value);


	vAusgabe = vAusgabe + "<table border = 1>";
	vAusgabe = vAusgabe + "<tr><th>Jahr</th><th>Jahresstartkapital (01.01)</th><th>Zinsen(31.12)</th><th>Jahresendkapital (31.12)</th></tr>" + "<br>";
	
	
	while (vJahr <= vLaufzeit) {
		
		vZinsen = vStartkapital * vZinssatz / 100;
		vEndkapital = vStartkapital + vZinsen;
		vAusgabe = vAusgabe + "<tr><td>"+ vJahr +"</td><td>"+ vStartkapital.toFixed(2) +"</td><td>"+ vZinsen.toFixed(2) +"</td><td>"+ vEndkapital.toFixed(2) +"</td></tr>";
		vStartkapital = vEndkapital;
		
		vJahr++;
	}
	
	vAusgabe = vAusgabe + "</table>";
					  
	document.getElementById("idAusgabe").innerHTML = vAusgabe;
}