
function afficherResultat(score, total){
    console.log("Votre score est de " + score + " sur " + total)
}

function choisirPhrasesOuMots(){

    let choixUtilisateur = prompt("Choisissez:\n(1) Mots\n(2) Phrases")
    while(choixUtilisateur !== "Mots" && choixUtilisateur !== "Phrases2"&&
        choixUtilisateur !== "mots" && choixUtilisateur !== "phrases"&&
        choixUtilisateur !== "1" && choixUtilisateur !== "2"
    ) {choixUtilisateur = prompt("Choisissez:\n(1) Mots\n(2) Phrases")}

    switch(choixUtilisateur){
        case "1":
        case "Mots":
        case "mots":
            return "mots"
        case "2":
        case "Phrases":
        case "phrases":
            return "phrases"
        default:
            break;
    }
}

function lancerBoucleDeJeu(liste){
    score=0
    for(let i=0; i<liste.length; i++){let aSaisir = liste[i]
        let saisi = prompt("Saisissez le mot \"" + aSaisir + "\"")
        if(saisi === liste[i]){
            score++
        }
        n=i+1
    }
    return score
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    
    let liste
    if (choix==="mots")
        {liste=listeMots}
    else if (choix==="phrases")
        {liste=listePhrases}

    afficherResultat(lancerBoucleDeJeu(liste),liste.length)
}

