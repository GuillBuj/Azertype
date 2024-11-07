let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique !", "La vie, l\’univers et le reste", "Merci pour le poisson"]

let score = 0

let choixUtilisateur = prompt("Choisissez:\n(1) Mots\n(2) Phrases")
while(choixUtilisateur !== "Mots" && choixUtilisateur !== "Phrases2"&&
    choixUtilisateur !== "mots" && choixUtilisateur !== "phrases"&&
    choixUtilisateur !== "1" && choixUtilisateur !== "2"
) {choixUtilisateur = prompt("Choisissez:\n(1) Mots\n(2) Phrases")}


console.log(choixUtilisateur)
switch(choixUtilisateur){
    case "1":
    case "Mots":
    case "mots":
        for(let i=0; i<listeMots.length; i++){
            let motApplication = listeMots[i]
            let motUtilisateur = prompt("Saisissez le mot \"" + motApplication + "\"")
            if(motUtilisateur === motApplication){
                score++
                console.log("Bravo!")
            } else {
                console.log("Nul...")
            }
            n=i+1
            console.log(score + "/" + n)
        }
    case "2":
    case "Phrases":
    case "phrases":
        for(let i=0; i<listePhrases.length; i++){
            let phraseApplication = listePhrases[i]
            let phraseUtilisateur = prompt("Saisissez le mot \"" + phraseApplication + "\"")
            if(phraseUtilisateur === phraseApplication){
                score++
                console.log("Bravo!")
            } else {
                console.log("Nul...")
            }
            n=i+1
            console.log(score + "/" + n)
        }
    default:
        break;
}





