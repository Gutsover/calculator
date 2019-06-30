//console.log(eval("1+2"));

let button = "";


// Fonction d'affichage dans la div #showvalue
function insert(btn) {
    button = button + btn.value;
    //console.log(button);
    document.getElementById('showvalue').innerHTML = button;
}

// Fonction de calcul des valeurs
function result() {
    document.getElementById('showvalue').innerHTML = eval(button);
}

// Fonction de reset de la console
function reset() {
    document.getElementById('showvalue').innerHTML = "0";
    button = "";
}

// Fonction effacer dernière valeur saisie
function goBack() {
    button = button.replace(button.slice(-1), "");
    document.getElementById('showvalue').innerHTML = button;
}

