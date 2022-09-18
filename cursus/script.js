//Cette fonction permet de calculer la date_jour
let date_act = new Date();
document.getElementById("date_actuelle").innerText =
  String(date_act.getDate()).padStart(2, "0") +
  "/" +
  String(date_act.getMonth() + 1).padStart(2, "0") +
  "/" +
  date_act.getFullYear();

//Fonction pour défiler les images
function heure_actuelle() {
  var date_jour = new Date(); /* creating object of Date class */
  var heure_jour = date_jour.getHours();
  var minute = date_jour.getMinutes();
  var seconde = date_jour.getSeconds();
  heure_jour = updateTime(heure_jour);
  minute = updateTime(minute);
  seconde = updateTime(seconde);
  document.getElementById("current_hour").innerText =
    heure_jour + " : " + minute + " : " + seconde; //Affectation de l'heure
  var temps = setTimeout(function () {
    heure_actuelle();
  }, 1000);
}

function updateTime(nombre) {
  if (nombre < 10) {
    return "0" + nombre;
  } else {
    return nombre;
  }
}
heure_actuelle(); //Appel de la fonction heure_actuelle
/*
let sous_menu = document.querySelector(".sous-menu");
sous_menu.onmouseover = function () {
  l2.style.opacity = "1";
};

sous_menu.onmouseout = function () {
  l2.style.opacity = "0";
};
*/
