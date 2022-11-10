
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
      navigator.serviceWorker
          .register("/serviceWorker.js")
          .then(res => console.log("service worker registered"))
          .catch(err => console.log("service worker not registered", err))
  })
};

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
  let margeGauche = (tailleEcrant / 2) - (widthImage /2); 
  imageLogo.style.marginLeft= margeGauche + "px"
  //imageLogo.innerHTML = output;
  console.log(imageLogo.style.marginLeft);
  buttonWidth = buttonStart.width;  
  let margeGauchebutton = (tailleEcrant / 2) - (tailleEcrant / 4); 
  buttonStart.style.marginLeft = margeGauchebutton + "px";
  buttonStart.style.marginTop = screen.availHeight*0.33 + "px";
  buttonRules.style.marginLeft = margeGauchebutton + "px";
  buttonRules.style.marginTop = screen.availHeight*0.53 + "px";
  console.log("consol"+buttonWidth);


  
  imageMillieu.appendChild(imageLogo);
  buttons.appendChild(buttonStart);
  buttons.appendChild(buttonRules);

  
};

const resizeimage = () => {
  let imageLogo = document.getElementById("imageAcc");
  let widthImage = imageLogo.width;  
  let tailleEcrant = window.innerWidth;
  console.log(tailleEcrant);
  let margeGauche = (tailleEcrant / 2) - (widthImage /2); 
  console.log("marge" + margeGauche);
  imageLogo.style.marginLeft= margeGauche + "px"
  let buttonStart = document.getElementById("Start");
  let buttonRules = document.getElementById("Rules");
  let margeGauchebutton = (tailleEcrant / 2) - (tailleEcrant / 4); 
  buttonStart.style.marginLeft = margeGauchebutton + "px";
  buttonRules.style.marginLeft = margeGauchebutton + "px";
}

document.addEventListener("DOMContentLoaded", showAccueil);
window.onresize = resizeimage;

