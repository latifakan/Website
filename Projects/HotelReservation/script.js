"use strict";
 
    function reservieren() {
        let resultHtml="";
        let vVorname;
        let vNachname;
        let vStraße;
        let vHausnummer;
        let vPLZ;
        let vOrt;
        let vPerson;
        let vZimmer;
        let vDatum;
        let vBrutto;
        let vNetto;
        let vMwSt;
        
        vVorname = document.getElementById("idVorname").value;
        vNachname = document.getElementById("idNachname").value;
        vStraße = document.getElementById("idStraße").value;
        vHausnummer = document.getElementById("idHausnummer").value;
        vPLZ = document.getElementById("idPLZ").value;
        vOrt = document.getElementById("idOrt").value;
        vPerson = document.getElementById("idPerson").value;
        vZimmer = document.getElementById("idZimmer").value;
        vDatum = document.getElementById("idDatum").value;
        
        vNetto = Number(41.85);
        vMwSt =  (Number(vNetto) * Number(0.07)).toFixed(2);
        vBrutto = Number(vNetto) + Number(vMwSt);
                        
        resultHtml = resultHtml + "</br>" + vVorname + " " + vNachname + "</br>";
        resultHtml = resultHtml + vStraße + " " + vHausnummer + "</br>";
        resultHtml = resultHtml + vPLZ  + " " + vOrt + "</br>";
        resultHtml = resultHtml + "</br>";
        
        resultHtml = resultHtml + "Anzahl Personen: " +vPerson+ "</br>";
        resultHtml = resultHtml + "Zimmerkategorie: " +vZimmer + "</br>";
        resultHtml = resultHtml + "Buchungsdatum: " + vDatum + "</br>";
        resultHtml = resultHtml + "</br>";
        
        resultHtml = resultHtml + "Netto: " + vNetto + "€</br>";
        resultHtml = resultHtml + "enthaltene MwSt.: " + vMwSt + "€</br>";
        resultHtml = resultHtml + "Brutto (Endbetrag): " + vBrutto + "€</br>";
        
        document.getElementById("idAusgabe").innerHTML = resultHtml;
    }