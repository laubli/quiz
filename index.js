
const imageMillieu = document.getElementById("imageMillieu");
const buttons = document.getElementById("buttons");

const showAccueil = () => {
    let imageLogo = document.getElementById("imageAcc");
    imageMillieu.removeChild(imageLogo);
    let buttonStart = document.getElementById("Start");
    let buttonRules = document.getElementById("Rules");
    buttons.removeChild(buttonStart);
    buttons.removeChild(buttonRules);

    let tailleEcrant = screen.width;
    let tailleDiv = document.getElementById("particles-js").clientHeight;
    let heightImage = tailleDiv * 0.25;
    let widthImage = 469 * heightImage / 349;
    console.log(widthImage);
    let margeGauche = (tailleEcrant / 2) - (widthImage / 2);
    imageLogo.style.marginLeft = margeGauche + "px"
    //imageLogo.innerHTML = output;
    console.log(imageLogo.style.marginLeft);
    buttonWidth = buttonStart.width;
    let margeGauchebutton = (tailleEcrant / 2) - (tailleEcrant / 4);
    buttonStart.style.marginLeft = margeGauchebutton + "px";
    buttonStart.style.marginTop = screen.availHeight * 0.33 + "px";
    buttonRules.style.marginLeft = margeGauchebutton + "px";
    buttonRules.style.marginTop = screen.availHeight * 0.53 + "px";
    console.log("consol" + buttonWidth);

    imageMillieu.appendChild(imageLogo);
    buttons.appendChild(buttonStart);
    buttons.appendChild(buttonRules);
};

const resizepage = () => {

    let tailleEcrant = window.innerWidth;
    let hauteurEcrant = window.innerHeight;

    try {
        let imageLogo = document.getElementById("imageAcc");
        let widthImage = imageLogo.width;
        let margeGauche = (tailleEcrant / 2) - (widthImage / 2);
        console.log("marge" + margeGauche);
        imageLogo.style.marginLeft = margeGauche + "px"
    } catch (error) { }

    try {
        let buttonStart = document.getElementById("Start");
        let buttonRules = document.getElementById("Rules");
        let margeGauchebutton = (tailleEcrant / 2) - (tailleEcrant / 4);
        buttonStart.style.marginLeft = margeGauchebutton + "px";
        buttonStart.style.marginTop = hauteurEcrant * 0.33 + "px";
        buttonRules.style.marginLeft = margeGauchebutton + "px";
        buttonRules.style.marginTop = hauteurEcrant * 0.53 + "px";
    } catch (error) { }

    try {
        let debutant = document.getElementById("debutant");
        let confirme = document.getElementById("confirme");
        let expert = document.getElementById("expert");
        let margeGauchebutton = (tailleEcrant / 2) - (tailleEcrant / 4);
        debutant.style.marginLeft = margeGauchebutton + "px";
        confirme.style.marginLeft = margeGauchebutton + "px";
        expert.style.marginLeft = margeGauchebutton + "px"; 
        debutant.style.marginTop = hauteurEcrant * 0.33 + "px";
        confirme.style.marginTop = hauteurEcrant * 0.48 + "px";
        expert.style.marginTop = hauteurEcrant * 0.63 + "px";
    } catch (error) {  }

}

function start() {

    buttonStart = document.getElementById("Start");
    buttonRules = document.getElementById("Rules");
    buttons.removeChild(buttonStart);
    buttons.removeChild(buttonRules);

    debutant = document.createElement("input");
    confirme = document.createElement("input");
    expert = document.createElement("input");
    debutant.setAttribute("id", "debutant");
    confirme.setAttribute("id", "confirme");
    expert.setAttribute("id", "expert");
    debutant.setAttribute("name", "Débutant");
    confirme.setAttribute("name", "Confirmé");
    expert.setAttribute("name", "Expert");
    debutant.setAttribute("value", "Débutant");
    confirme.setAttribute("value", "Confirmé");
    expert.setAttribute("value", "Expert");
    debutant.setAttribute("type", "button");
    confirme.setAttribute("type", "button");
    expert.setAttribute("type", "button");
    debutant.setAttribute("onclick", "startDebutant()");
    confirme.setAttribute("onclick", "startConfirme()");
    expert.setAttribute("onclick", "startExpert()");

    let tailleEcrant = window.innerWidth;
    let margeGauchebutton = (tailleEcrant / 2) - (tailleEcrant / 4);
    debutant.style.marginLeft = margeGauchebutton + "px";
    confirme.style.marginLeft = margeGauchebutton + "px";
    expert.style.marginLeft = margeGauchebutton + "px";
    
    debutant.style.marginTop = screen.availHeight * 0.33 + "px";
    confirme.style.marginTop = screen.availHeight * 0.48 + "px";
    expert.style.marginTop = screen.availHeight * 0.63 + "px";

    buttons.appendChild(debutant);
    buttons.appendChild(confirme);
    buttons.appendChild(expert);

    console.log("je poaseeoihddaideinhe");

}


document.addEventListener("DOMContentLoaded", showAccueil);
window.onresize = resizepage;

