

function afficher(liste) {
    var resultats = document.getElementById("resultat");
    resultats.replaceChildren();
    liste.forEach(livre => 
        resultats.innerHTML += "<div class='res'>" + "<br>" + 
      "<h3>" + livre.titre + "</h3>" +
      "<p>" + livre.desc + "</p>" +
      "<p>" + livre.pop + "</p>" +
      "<img class='affiche' src=" + livre.poster + ">"
      + "</div>"
      );
  }