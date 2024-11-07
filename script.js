/*const motApplication = "Bonjour"
let motUtilisateur = prompt("Entrez le mot: " + motApplication)
if(motUtilisateur === motApplication){
    console.log("Bravo!")    
} else {
    console.log("Nul!")
}*/

let listeMots = ["Cachalot", "Pétunia", "Serviette"]

let score = 0
console.log(score)

let motApplication = listeMots[0]
let motUtilisateur = prompt("Saisissez le mot \"" + motApplication + "\"")
if(motUtilisateur === motApplication){
    score++
    console.log("Bravo!")
} else {
    console.log("Nul!")
}
console.log(score + "/1")

motApplication = listeMots[1]
motUtilisateur = prompt("Saisissez le mot \"" + motApplication + "\"")
if(motUtilisateur === motApplication){
    score++
    console.log("Bravo!")
} else {
    console.log("Nul!")
}
console.log(score + "/2")

motApplication = listeMots[2]
motUtilisateur = prompt("Saisissez le mot \"" + motApplication + "\"")
if(motUtilisateur === motApplication){
    score++
    console.log("Bravo!")
} else {
    console.log("Nul!")
}
console.log(score + "/3")



