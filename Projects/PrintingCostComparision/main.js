function RechneKosten() {

    let drucker1;
    let drucker2;
    let drucker1Kosten;
    let drucker2Kosten;

    let kostenDrucker1;
    let kostenDrucker2;

    let start = 1000;
    let end = 10000;

    let result = "";
    let kritischeMenge = "";

    drucker1 = parseFloat(document.querySelector("#drucker1").value);
    drucker2 = parseFloat(document.querySelector("#drucker2").value);
    drucker1Kosten = parseFloat(document.querySelector("#drucker1Kosten").value);
    drucker2Kosten = parseFloat(document.querySelector("#drucker2Kosten").value);

    result = result + "<table border = 1> <br>";
    result = result + "<tr><th>Seitenanzahl</th><th>Drucker 1</th><th>Drucker 2</th><th>Besseres Angebot</th><th>Patrone</th></tr>";

    while (start <= end) {

        kostenDrucker1 = drucker1 + (start*drucker1Kosten);
        kostenDrucker2 = drucker2 + (start*drucker2Kosten);

        if (start % 2000 == 0) {

            result = result + "<tr><td>" + start + "</td><td>" + kostenDrucker1.toFixed(2) +"€"+"</td><td>"+ kostenDrucker2.toFixed(2) + "€" +"</td><td>Drucker 2 ist günstiger</td><td style=background-color:orange>Tauschen</td></tr>";
        
        } else if (kostenDrucker1 == kostenDrucker2) {

            result = result + "<tr style=background-color:lightgreen><td>" + start + "</td><td>" + kostenDrucker1.toFixed(2) +"€"+"</td><td>"+ kostenDrucker2.toFixed(2) + "€" +"</td><td>Kritische Menge erreicht!</td></tr>";

        } else if (kostenDrucker1 < kostenDrucker2) {

            result = result + "<tr><td>" + start + "</td><td>" + kostenDrucker1.toFixed(2) +"€"+"</td><td>"+ kostenDrucker2.toFixed(2) + "€" +"</td><td> Drucker 1 ist günstiger!</td></tr>";

        } else {
            
            result = result + "<tr><td>" + start + "</td><td>" + kostenDrucker1.toFixed(2) +"€"+"</td><td>"+ kostenDrucker2.toFixed(2) + "€" +"</td><td> Drucker 2 ist günstiger!</td></tr>";

        }

        start = start + 1000;

    }

    kritischeMenge = (drucker1-drucker2)/(drucker2Kosten-drucker1Kosten);
    kritischeMenge = "Die Kritische Menge liegt bei: " + kritischeMenge.toFixed(2) + " Seiten";
    document.querySelector("#kritischeMenge").innerHTML = kritischeMenge;
    
    result = result + "</table>" + "<br>";
    document.querySelector("#outputResult").innerHTML = result;
}