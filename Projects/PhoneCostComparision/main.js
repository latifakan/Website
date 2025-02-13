function fRechne() {

    let vGrundgebührA;
    let vGrundgebührB;

    let vKostenProMinuteA;
    let vKostenProMinuteB;

    let vMinutenzahl = 0;

    let vKostenA;
    let vKostenB;

    let result = "";
    let result2 = "";

    vGrundgebührA = parseFloat(document.getElementById("idGrundgebührA").value.replace(",", "."));
    vGrundgebührB = parseFloat(document.getElementById("idGrundgebührB").value.replace(",", "."));
    vKostenProMinuteA = parseFloat(document.getElementById("idKostenProMinuteA").value.replace(",", "."));
    vKostenProMinuteB = parseFloat(document.getElementById("idKostenProMinuteB").value.replace(",", "."));

    result = result + "<table border = 1>";
    result = result + "<tr><th>Telefoneinheiten</th><th>Gesamtkosten A</th><th>Gesamtkosten B</th><th>Besserse Angebot ?</th></tr>" + "<br>";

    while (vMinutenzahl <= 200) {

        vKostenA = vMinutenzahl * vKostenProMinuteA + vGrundgebührA;
        vKostenB = vMinutenzahl * vKostenProMinuteB + vGrundgebührB;

        if (vKostenA < vKostenB) {
            
            result = result + "<tr><td>" + vMinutenzahl + "</td><td>" + vKostenA.toFixed(2).replace(".", ",") +"€"+"</td><td>"+ vKostenB.toFixed(2).replace(".", ",") + "€" +"</td><td>Anbieter A ist günstiger</td></tr>";

        } else if (vKostenA == vKostenB) {

            result = result + "<tr style=background-color:lightgreen><td>" + vMinutenzahl + "</td><td>" + vKostenA.toFixed(2).replace(".", ",") +"€"+"</td><td>"+ vKostenB.toFixed(2).replace(".", ",") + "€" +"</td><td>Kritische Menge erreicht!</td></tr>";

        } else {

            result = result + "<tr><td>" + vMinutenzahl + "</td><td>" + vKostenA.toFixed(2).replace(".", ",") +"€"+"</td><td>"+ vKostenB.toFixed(2).replace(".", ",") + "€" +"</td><td>Anbieter B ist günstiger</td></tr>";

        }

        vMinutenzahl = vMinutenzahl + 10;

    }

    result2 = (vGrundgebührA-vGrundgebührB)/(vKostenProMinuteB-vKostenProMinuteA);
    result2 = "<br>" + "Die Kritische Menge liegt bei " + result2 + ".";
    
    result = result + "</table>";

    document.getElementById("idAusgabe").innerHTML = result;
    document.getElementById("idAusgabe2").innerHTML = result2;
}