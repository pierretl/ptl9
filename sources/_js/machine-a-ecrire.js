function decomposeChaineDansTableu(string, textePrecedent){
    var stringDecompose = string.split("");
    var tableau = new Array;
    if (!textePrecedent){
        var textePrecedent = '';
    }

    for (i=0; i<(string.length); i++){
        tableau[i] = textePrecedent+stringDecompose[i];
        textePrecedent = tableau[i];
    }

    return tableau;
}


/*------------------------------------------------------*/


function effaceCaractereDansTableau(tableauSource, nombreCaractere){
    var tableau = new Array;

    for (i=1; i<(nombreCaractere+1); i++) {
        tableau.push(tableauSource[(tableauSource.length - 1 - i)]);
    }

    //fusion des tableaux
    Array.prototype.push.apply(tableauSource, tableau);

    return tableauSource;
}


/*------------------------------------------------------*/


function ecris(elDom, tableau){
    elDom.innerHTML = tableau[iterationTexteActuel];
    iterationTexteActuel++;
    if(iterationTexteActuel >= tableau.length) {
        iterationTexteActuel = iterationTexteFinal;
    }
}


/*------------------------------------------------------*/


function lesTextes(){
    var stringDebut = decomposeChaineDansTableu(" Intégrateur");

    var stringDebutDernierIteration = stringDebut[stringDebut.length - 1];
    stringDebut.push(stringDebutDernierIteration,stringDebutDernierIteration);

    var corrigeStringDebut = effaceCaractereDansTableau(stringDebut, 13);
    var corrigeStringDebutDernierIteration = corrigeStringDebut[corrigeStringDebut.length - 1];

    var chaineCorriger = decomposeChaineDansTableu("Front-End Développer", corrigeStringDebutDernierIteration);
    var fusionTableau = corrigeStringDebut.concat(chaineCorriger);

    var corrigeString2 = effaceCaractereDansTableau(fusionTableau, 9);
    var corrigeString2DernierIteration = corrigeString2[corrigeString2.length - 1];

    var chaineCorriger2 = decomposeChaineDansTableu("esigner", corrigeString2DernierIteration);
    var fusionTableau2 = corrigeString2.concat(chaineCorriger2);

    return fusionTableau2;
}


/*------------------------------------------------------*/


//initialisation
var cible = document.querySelector(".js--ecris");
var aEcrire = lesTextes();

var iterationTexteActuel = 0;
var iterationTexteFinal = aEcrire.length - 1;

if(document.getElementById){
    setInterval("ecris(cible, aEcrire)",200)
}