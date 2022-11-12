
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

const home = () => {

    try {
        buttons.removeChild(document.getElementById("Start"));
        buttons.removeChild(document.getElementById("Rules"));
    } catch (error) { }
    try {
        buttons.removeChild(document.getElementById("debutant"));
        buttons.removeChild(document.getElementById("confirme"));
        buttons.removeChild(document.getElementById("expert"));
    } catch (error) { }
    try {
        buttons.removeChild(document.getElementById("rep1"));
        buttons.removeChild(document.getElementById("rep2"));
        buttons.removeChild(document.getElementById("rep3"));
        buttons.removeChild(document.getElementById("rep4"));
    } catch (error) { }


    document.getElementById("titre").innerText = "Star Wars Quiz";
    document.getElementById("numero").innerText = "";

    let imageLogo = document.getElementById("imageAcc");
    imageLogo.setAttribute("src", "./assets/img/Quiz-Star-wars.png");
    let buttonStart = document.createElement("input");
    let buttonRules = document.createElement("input");
    buttonStart.setAttribute("id", "Start");
    buttonRules.setAttribute("id", "Rules");
    buttonStart.setAttribute("type", "button");
    buttonRules.setAttribute("type", "button");
    buttonStart.setAttribute("value", "Start");
    buttonRules.setAttribute("value", "Rules");
    buttonStart.setAttribute("onclick", "start()");
    buttonRules.setAttribute("onclick", "rules()");


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

    buttons.appendChild(buttonStart);
    buttons.appendChild(buttonRules);

};

const resizepage = () => {

    let tailleEcrant = window.innerWidth;
    let hauteurEcrant = window.innerHeight;

    try {
        let image = document.getElementById("imageAcc");
        let widthImage = image.width;
        let margeGauche = (tailleEcrant / 2) - (widthImage / 2);
        console.log("marge" + margeGauche);
        image.style.marginLeft = margeGauche + "px"
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
    } catch (error) { }

    try {
        let rep1 = document.getElementById("rep1");
        let rep2 = document.getElementById("rep2");
        let rep3 = document.getElementById("rep3");
        let rep4 = document.getElementById("rep4");

        let margeGauchebutton = (tailleEcrant / 2) - (tailleEcrant / 4);
        rep1.style.marginLeft = margeGauchebutton + "px";
        rep2.style.marginLeft = margeGauchebutton + "px";
        rep3.style.marginLeft = margeGauchebutton + "px";
        rep4.style.marginLeft = margeGauchebutton + "px";

        rep1.style.marginTop = screen.availHeight * 0.30 + "px";
        rep2.style.marginTop = screen.availHeight * 0.43 + "px";
        rep3.style.marginTop = screen.availHeight * 0.56 + "px";
        rep4.style.marginTop = screen.availHeight * 0.69 + "px";
    } catch (error) { }

}

const resizeImage = () =>{

    let tailleEcrant = screen.availWidth;
    let hauteurEcrant = screen.height;
    image = document.getElementById("imageAcc");
    console.log("tailleEcrant " + tailleEcrant);
    let widthImage = image.clientWidth;
    console.log("widthImage " + widthImage);
    let margeGauche = (tailleEcrant - widthImage) / 2;
    console.log("marge " + margeGauche);
    image.style.marginLeft = margeGauche + "px";

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
}

function startDebutant() {
    niveau = "debutant";
    fetch("./quiz.json")
        .then(response => {
            return response.json();
        }).then(response => {
            return response.fr;
        }).then(response => {
            return response.débutant;
        }).then(response => {
            startJeu(response);
        });
}

let quiz = [];
let niveau = "debutant";

function startJeu(quest) {

    console.log(quiz);
    quest.forEach(e =>
        quiz.push({
            id: e.id,
            question: e.question,
            propositions: e.propositions,
            réponse: e.réponse,
            anecdote: e.anecdote
        })
    );
    console.log(quiz[0].propositions);

    document.getElementById("titre").innerText = "Question";
    document.getElementById("numero").innerText = "1";

    debutant = document.getElementById("debutant");
    confirme = document.getElementById("confirme");
    expert = document.getElementById("expert");
    buttons.removeChild(debutant);
    buttons.removeChild(confirme);
    buttons.removeChild(expert);

    let imageQuest = document.getElementById("imageAcc");
    imageQuest.setAttribute("src", "./assets/img/debutant/q1.jpg");
    imageQuest.style.maxWidth = screen.width - 6 + "px";

    rep1 = document.createElement("input");
    rep2 = document.createElement("input");
    rep3 = document.createElement("input");
    rep4 = document.createElement("input");
    rep1.setAttribute("id", "rep1");
    rep2.setAttribute("id", "rep2");
    rep3.setAttribute("id", "rep3");
    rep4.setAttribute("id", "rep4");

    rep1.setAttribute("value", quiz[0].propositions[0]);
    rep2.setAttribute("value", quiz[0].propositions[1]);
    rep3.setAttribute("value", quiz[0].propositions[2]);
    rep4.setAttribute("value", quiz[0].propositions[3]);

    rep1.setAttribute("type", "button");
    rep2.setAttribute("type", "button");
    rep3.setAttribute("type", "button");
    rep4.setAttribute("type", "button");

    rep1.setAttribute("onclick", "verifReponse(1)");
    rep2.setAttribute("onclick", "verifReponse(2)");
    rep3.setAttribute("onclick", "verifReponse(3)");
    rep4.setAttribute("onclick", "verifReponse(4)");

    let tailleEcrant = screen.width;
    let margeGauchebutton = (tailleEcrant / 2) - (tailleEcrant / 4);
    rep1.style.marginLeft = margeGauchebutton + "px";
    rep2.style.marginLeft = margeGauchebutton + "px";
    rep3.style.marginLeft = margeGauchebutton + "px";
    rep4.style.marginLeft = margeGauchebutton + "px";

    rep1.style.marginTop = screen.availHeight * 0.30 + "px";
    rep2.style.marginTop = screen.availHeight * 0.43 + "px";
    rep3.style.marginTop = screen.availHeight * 0.56 + "px";
    rep4.style.marginTop = screen.availHeight * 0.69 + "px";

    buttons.appendChild(rep1);
    buttons.appendChild(rep2);
    buttons.appendChild(rep3);
    buttons.appendChild(rep4);

    resizeImage();
}

function questionSuivante() {

    let id = document.getElementById("numero").innerText;

    rep1 = document.getElementById("rep1");
    rep2 = document.getElementById("rep2");
    rep3 = document.getElementById("rep3");
    rep4 = document.getElementById("rep4");

    rep1.setAttribute("value", quiz[id].propositions[0]);
    rep2.setAttribute("value", quiz[id].propositions[1]);
    rep3.setAttribute("value", quiz[id].propositions[2]);
    rep4.setAttribute("value", quiz[id].propositions[3]);

    let imageQuest = document.getElementById("imageAcc");
    imageQuest.setAttribute("src", "./assets/img/" + niveau + "/q" + id + ".jpg");
    
    resizeImage();

}

function verifReponse(numRep) {

    let id = document.getElementById("numero").innerText;
    idRep = "rep" + numRep;
    console.log(document.getElementById(idRep).value);
    console.log(quiz[id - 1].réponse);
    if (quiz[id - 1].réponse === document.getElementById(idRep).value){
        console.log("vrais");
    }

    id = id - 1 + 2;
    document.getElementById("numero").innerText = id;

}


document.addEventListener("DOMContentLoaded", showAccueil);
window.onresize = resizepage;

