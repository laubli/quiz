
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
