"use strict";
 
    function reservieren() {
        let vAusgabeHtml="";
        let vVorname;
        let vNachname;
        let vStraße;
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
        vPLZ = document.getElementById("idPLZ").value;
        vOrt = document.getElementById("idOrt").value;
        vPerson = document.getElementById("idPerson").value;
        vZimmer = document.getElementById("idZimmer").value;
        vDatum = document.getElementById("idDatum").value;
        
        vNetto = Number(41.85);
        vMwSt =  (Number(vNetto) * Number(0.07)).toFixed(2);
        vBrutto = Number(vNetto) + Number(vMwSt);
                        
        vAusgabeHtml = vAusgabeHtml + "</br>" + vVorname + " " + vNachname + "</br>";
        vAusgabeHtml = vAusgabeHtml + vStraße + "</br>";
        vAusgabeHtml = vAusgabeHtml + vPLZ  + " " + vOrt + "</br>";
        vAusgabeHtml = vAusgabeHtml + "</br>";
        
        vAusgabeHtml = vAusgabeHtml + "Anzahl Personen: " +vPerson+ "</br>";
        vAusgabeHtml = vAusgabeHtml + "Zimmerkategorie: " +vZimmer + "</br>";
        vAusgabeHtml = vAusgabeHtml + "Buchungsdatum: " + vDatum + "</br>";
        vAusgabeHtml = vAusgabeHtml + "</br>";
        
        vAusgabeHtml = vAusgabeHtml + "Netto: " + vNetto + "€</br>";
        vAusgabeHtml = vAusgabeHtml + "enthaltene MwSt.: " + vMwSt + "€</br>";
        vAusgabeHtml = vAusgabeHtml + "Brutto (Endbetrag): " + vBrutto + "€</br>";
        
        document.getElementById("idAusgabe").innerHTML = vAusgabeHtml;
    }