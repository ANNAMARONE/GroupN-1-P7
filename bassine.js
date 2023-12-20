
//Declaration des Variables
r1, r2, r3, rs, rp;

// Saisie des résistances
r1 = parseFloat(prompt("Donnez un réel positif pour R1 :"));
r2 = parseFloat(prompt("Donnez un réel positif pour R2 :"));
r3 = parseFloat(prompt("Donnez un réel positif pour R3 :"));

// Vérification des résistances
if (r1 < 0 || r2 < 0 || r3 < 0) {
// Si l'une des résistances est négative, demande un réel positif
alert("Donnez un réel positif");
}
else {
// Calculs de la résistance en série et en parallèle
rs = r1 + r2 + r3;
rp = (r1 * r2 * r3) / (r1 * r2 + r1 * r3 + r2 * r3);

// Affichage des résultats
alert("La résistance en série est " + rs);
alert("La résistance en parallèle est " + rp);
}
