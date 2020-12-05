console.log("connected to app.js!");

const myOverlay = document.getElementById("myOverlay");
const mySidebar = document.getElementById("mySidebar");
const navCloseMenu = document.getElementById("nav-close-menu");
const navHamburger = document.getElementById("nav-hamburger");

navHamburger.addEventListener('click', () => {
   mySidebar.style.display = "block";
   myOverlay.style.display = "block";
});

navCloseMenu.addEventListener('click', () => {
   mySidebar.style.display = "none";
   myOverlay.style.display = "none";
})
