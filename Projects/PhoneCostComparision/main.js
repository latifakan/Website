function fRechne() {

    var vGrundgebührA;
    var vGrundgebührB;

    var vKostenProMinuteA;
    var vKostenProMinuteB;

    var vMinutenzahl = 0;

    var vKostenA;
    var vKostenB;

    var vAusgabe = "";
    var vAusgabe2 = "";

    vGrundgebührA = parseFloat(document.getElementById("idGrundgebührA").value);
    vGrundgebührB = parseFloat(document.getElementById("idGrundgebührB").value);
    vKostenProMinuteA = parseFloat(document.getElementById("idKostenProMinuteA").value);
    vKostenProMinuteB = parseFloat(document.getElementById("idKostenProMinuteB").value);

    vAusgabe = vAusgabe + "<table border = 1>";
    vAusgabe = vAusgabe + "<tr><th>Telefoneinheiten</th><th>Gesamtkosten A</th><th>Gesamtkosten B</th><th>Besserse Angebot ?</th></tr>" + "<br>";

    while (vMinutenzahl <= 200) {

        vKostenA = vMinutenzahl * vKostenProMinuteA + vGrundgebührA;
        vKostenB = vMinutenzahl * vKostenProMinuteB + vGrundgebührB;

        if (vKostenA < vKostenB) {
            
            vAusgabe = vAusgabe + "<tr><td>" + vMinutenzahl + "</td><td>" + vKostenA.toFixed(2) +"€"+"</td><td>"+ vKostenB.toFixed(2) + "€" +"</td><td>Anbieter A ist günstiger</td></tr>";

        } else if (vKostenA == vKostenB) {

            vAusgabe = vAusgabe + "<tr style=background-color:lightgreen><td>" + vMinutenzahl + "</td><td>" + vKostenA.toFixed(2) +"€"+"</td><td>"+ vKostenB.toFixed(2) + "€" +"</td><td>Kritische Menge erreicht!</td></tr>";

        } else {

            vAusgabe = vAusgabe + "<tr><td>" + vMinutenzahl + "</td><td>" + vKostenA.toFixed(2) +"€"+"</td><td>"+ vKostenB.toFixed(2) + "€" +"</td><td>Anbieter B ist günstiger</td></tr>";

        }

        vMinutenzahl = vMinutenzahl + 10;

    }

    vAusgabe2 = (vGrundgebührA-vGrundgebührB)/(vKostenProMinuteB-vKostenProMinuteA);
    vAusgabe2 = "<br>" + "Die Kritische Menge liegt bei " + vAusgabe2 + ".";
    
    vAusgabe = vAusgabe + "</table>";

    document.getElementById("idAusgabe").innerHTML = vAusgabe;
    document.getElementById("idAusgabe2").innerHTML = vAusgabe2;
}