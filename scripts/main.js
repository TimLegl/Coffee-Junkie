const menuOpenIcon = document.getElementById("menu-open");
const menuCloseIcon = document.getElementById("menu-close");
const hamburgerMenuContainer = document.getElementById("hamburger-menu-container");
const introHeading = document.getElementById("intro-heading");
const scrollToTopElement = document.getElementById("scroll-to-top-container");

// Anonyme Funktion als Event Handler
scrollToTopElement.addEventListener("click", function(meinEvent){
  meinEvent.preventDefault(); // Notwendig um Standardverhalten des Webbrowsers zu ändern
  scrollToTop();
});

menuOpenIcon.addEventListener("click", function() {
  menuOpenIcon.classList.add("ausblenden-uebergang");
  menuOpenIcon.classList.add("ausblenden");

  setTimeout(() => {
    menuCloseIcon.classList.remove("ausblenden");
    menuCloseIcon.classList.add("einblenden-uebergang");
    // MENU EINBLENDEN
  }, 200); // Anpassen je nach dauer der transition in "ausblenden-uebergang" & "einblenden-uebergang"

  hamburgerMenuContainer.classList.add("einblenden");

  // Überschrift entfernen, wenn Menü eingeblendet wird und IntroHeading vorhanden
  if(introHeading) {
    introHeading.classList.remove("einblenden-uebergang");
    introHeading.classList.add("ausblenden-uebergang");
  }
});

menuCloseIcon.addEventListener("click", function() {
  menuCloseIcon.classList.add("ausblenden-uebergang");
  menuCloseIcon.classList.add("ausblenden");
  setTimeout(() => {
    menuOpenIcon.classList.remove("ausblenden");
    menuOpenIcon.classList.add("einblenden-uebergang");
  }, 200); // 200ms Verzögerung bis Code in der Funktion ausgeführt wird. Code darunter wird direkt ohne Verzögerung ausgeführt
  hamburgerMenuContainer.classList.remove("einblenden");
  // Überschrift einblenden, wenn Menü ausgeblendet wird und IntroHeading vorhanden
  if(introHeading) {
    introHeading.classList.remove("ausblenden-uebergang");
    introHeading.classList.add("einblenden-uebergang");
  }
});

function scrollToTop() {
  window.scrollTo({
    top:0,
    behavior: "smooth",
  });
}
