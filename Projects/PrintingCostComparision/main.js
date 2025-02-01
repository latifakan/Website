function fRechne() {

    var vEco;
    var vSmart;
    var vEcoKosten;
    var vSmartKosten;

    var vKostenEco;
    var vKostenSmart;

    var vStart = 1000;
    var vEnde = 10000;

    var vAusgabe = "";
    var vKritischeMenge = "";

    vEco = parseFloat (document.getElementById("idEco").value);
    vSmart = parseFloat (document.getElementById("idSmart").value);
    vEcoKosten = parseFloat (document.getElementById("idEcoKosten").value);
    vSmartKosten = parseFloat (document.getElementById("idSmartKosten").value);

    vAusgabe = vAusgabe + "<table border = 1> <br>";
    vAusgabe = vAusgabe + "<tr><th>Seitenanzahl</th><th>Kosten Eco</th><th>Kosten Smart</th><th>Besseres Angebot</th><th>Tonertausch</th></tr>";

    while (vStart <= vEnde) {

        vKostenEco = vEco + (vStart*vEcoKosten);
        vKostenSmart = vSmart + (vStart*vSmartKosten);

        if (vStart % 2000 == 0) {

            vAusgabe = vAusgabe + "<tr><td>" + vStart + "</td><td>" + vKostenEco.toFixed(2) +"€"+"</td><td>"+ vKostenSmart.toFixed(2) + "€" +"</td><td>Smart ist günstiger</td><td style=background-color:orange>Tonertausch</td></tr>";
        
        } else if (vKostenEco == vKostenSmart) {

            vAusgabe = vAusgabe + "<tr style=background-color:lightgreen><td>" + vStart + "</td><td>" + vKostenEco.toFixed(2) +"€"+"</td><td>"+ vKostenSmart.toFixed(2) + "€" +"</td><td>Kritische Menge erreicht!</td></tr>";

        } else if (vKostenEco < vKostenSmart) {

            vAusgabe = vAusgabe + "<tr><td>" + vStart + "</td><td>" + vKostenEco.toFixed(2) +"€"+"</td><td>"+ vKostenSmart.toFixed(2) + "€" +"</td><td> Eco ist günstiger!</td></tr>";

        } else {
            
            vAusgabe = vAusgabe + "<tr><td>" + vStart + "</td><td>" + vKostenEco.toFixed(2) +"€"+"</td><td>"+ vKostenSmart.toFixed(2) + "€" +"</td><td> Smart ist günstiger!</td></tr>";

        }

        vStart = vStart + 1000;

    }

    vKritischeMenge = (vEco-vSmart)/(vSmartKosten-vEcoKosten);
    vKritischeMenge = "Die Kritische Menge liegt bei: " + vKritischeMenge + " (Gerundet: " + vKritischeMenge.toFixed(2) + ")";
    document.getElementById("idKritischeMenge").innerHTML = vKritischeMenge;
    
    vAusgabe = vAusgabe + "</table>" + "<br>";
    document.getElementById("idAusgabe").innerHTML = vAusgabe;
}