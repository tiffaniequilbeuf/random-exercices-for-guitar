
let choice = [1,2,3,4]
let fingerStyle = []

//tant que choix est supérieur à zéro, remplir fingerstyle avec un élémnt aléatoire inférieur à celui de la liste choice

while (choice.length > 0){
    let randomIndex = Math.floor(Math.random() * choice.length)
    let tirage = choice.splice(randomIndex, 1)[0]
    fingerStyle.push(tirage)
}

//Ensuite, je remets 1 élément de la liste par emplacement défini dans mon HTML

let fingerL = document.querySelector('.fingerL')
fingerL.textContent = `Main gauche : ${fingerStyle.join(' - ')}`


//Si on clique sur training, redirige sur la page d'un métronome en ligne

let training = document.querySelector('.training')
training.addEventListener('click', e => {
    window.open("https://www.metronome-en-ligne.com/");
});

//Morceau aléatoire :

let setlist = ['F1','SA', 'Petit Chat', 'SP', 'Nouv', 'Scarlet', 'Butters', 'Versus']
let triple = []

//Triplette  = focus du jour + 2 morceaux

while (setlist.length > 0){
    let randomIndex = Math.floor(Math.random() * setlist.length)
    let tirage = setlist.splice(randomIndex, 1)[0]
    triple.push(tirage)
}
let songs = document.querySelector('.songs').textContent = triple[0]

let triplette = document.querySelector('.triple')
triplette.textContent = `${triple[0]} - ${triple[1]} - ${triple[2]}`


/* Idées _______________________________________________________________________________________________________

Il faudrait :
    - créer un bloc note pour mes commentaire hebdomadaires, le ressenti sur les morceau et un système de coche pour enregistrer les morceaux déjà travaillés.
    - faire un timer pour les entrainements flash 15 min, court 30min, normal 1h, flex et juste chrono + paramétrer une alerte sonore quand le temps est écoulé
    - se créer un métronome perso avec précision du rythme et de la vitesse 
    ex: c'est à 60 en triolet


//Essai de bloc note :
/*const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

let db; //Ma base de donnée
window.onload = function(){
    let request = window.open("note", 1)

    request.onerror = function () {
        console.log('Database failed to open')
    };
    request.onsuccess = function () {
        console.log("Database opened successfully");
        db = request.result;
        displayData()
    }
    request.onupgradeneeded = function(e){
        let db = e.target.result;
        let  objectStore = db.createObjectStore("note", {
            keyPath : "id",
            autoIncrement : true,
        })
    }
    
    object.createIndex("title", "title",{unique : false});
    object.createIndex("body", "body", {unique : false});
    console.log("Database setup complete");

    form.onsubmit = addData;

    function addData(e){
        e.preventDefault();
        let newItem = {title : titleInput.value, body : bodyInput.value};
        let transaction = db.transaction(["notes"], "rewrite"); 
        let objectStore = transaction.objectStore("notes");
        var request = objectStore.add(newItem);

        request.onsuccess = function (){
            titleInput.value = "";
            bodyInput.value ="";
        }
    }

    transaction.oncomplete= function (){
        console.log("Transaction completed: database modification finished.");
        displayData();
    }

    transaction.onerror = function (){
        console.log("Transaction not opened due to error");
    }


}*/

















