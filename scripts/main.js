/*
const menuOpenIcon = document.getElementById("menu-open");
const menuCloseIcon = document.getElementById("menu-close");

menuOpenIcon.addEventListener("click", openToCloseTransformation);
menuCloseIcon.addEventListener("click", closeToOpenTransformation);

function openToCloseTransformation() {
    menuOpenIcon.classList.add("ausblenden");
    menuCloseIcon.classList.remove("ausblenden");
}

function closeToOpenTransformation() {
    menuCloseIcon.classList.add("ausblenden");
    menuOpenIcon.classList.remove("ausblenden");
}
*/



/*
const menuOpenIcon = document.getElementById("menu-open");
const menuCloseIcon = document.getElementById("menu-close");

const scrollToTopElement = document.getElementById("scroll-to-top-container");

menuOpenIcon.addEventListener("click", toggleVisibility);
menuCloseIcon.addEventListener("click", toggleVisibility);

scrollToTopElement.addEventListener("click", scrollToTop);

function toggleVisibility() {
    menuOpenIcon.classList.toggle("ausblenden");
    menuCloseIcon.classList.toggle("ausblenden");
}

function scrollToTop() {
  window.scrollTo({
    top:0,
    behavior: "smooth",
  });
}
*/
/*
const menuOpenIcon = document.getElementById("menu-open");
const menuCloseIcon = document.getElementById("menu-close");

const scrollToTopElement = document.getElementById("scroll-to-top-container");

// Direkte Funktionsreferenz
menuOpenIcon.addEventListener("click", toggleVisibility);
menuCloseIcon.addEventListener("click", toggleVisibility);
// Ideal für einfache Event-Handler, die keine spezielle Event-Behandlung benötigen. Es ist einfacher und effizienter, wenn keine zusätzliche Logik benötigt wird.

document.querySelector(".menu-icon").addEventListener("click", function() {
  this.classList.toggle("active");
})

// Anonyme Funktion als Event Handler
scrollToTopElement.addEventListener("click", function(meinEvent){
  meinEvent.preventDefault(); // Notwendig um Standardverhalten des Webbrowsers zu ändern
  scrollToTop();
});
// Der Event-Handler wird hier mit einer anonymen Funktion verbunden, die beim Auftreten des Events ausgeführt wird. Diese nimmt das Event-Objekt "meinEvent"(Name frei wählbar - oft einfach 'event') entgegen und kann damit arbeiten, bevor die eigentliche Funktion "scrollToTop" aufgerufen wird. Flexibler, da du das Event-Objekt direkt manipulieren und zusätzliche Logik ausführen kannst.

function toggleVisibility() {
  menuOpenIcon.classList.toggle("ausblenden");
  menuCloseIcon.classList.toggle("ausblenden");
}

function scrollToTop() {
  window.scrollTo({
    top:0,
    behavior: "smooth",
  });
}
*/

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
// Der Event-Handler wird hier mit einer anonymen Funktion verbunden, die beim Auftreten des Events ausgeführt wird. Diese nimmt das Event-Objekt "meinEvent"(Name frei wählbar - oft einfach 'event') entgegen und kann damit arbeiten, bevor die eigentliche Funktion "scrollToTop" aufgerufen wird. Flexibler, da du das Event-Objekt direkt manipulieren und zusätzliche Logik ausführen kannst.

menuOpenIcon.addEventListener("click", function() {
  menuOpenIcon.classList.add("ausblenden-uebergang");
  menuOpenIcon.classList.add("ausblenden");
  setTimeout(() => {
    menuCloseIcon.classList.remove("ausblenden");
    menuCloseIcon.classList.add("einblenden-uebergang");
    // MENU EINBLENDEN
  }, 500); // Anpassen je nach dauer der transition in "ausblenden-uebergang" & "einblenden-uebergang"
  hamburgerMenuContainer.classList.add("einblenden");
  // Überschrift entfernen, wenn Menü eingeblendet wird
  introHeading.classList.remove("einblenden-uebergang");
  introHeading.classList.add("ausblenden-uebergang");
});

menuCloseIcon.addEventListener("click", function() {
  menuCloseIcon.classList.add("ausblenden-uebergang");
  menuCloseIcon.classList.add("ausblenden");
  setTimeout(() => {
    menuOpenIcon.classList.remove("ausblenden");
    menuOpenIcon.classList.add("einblenden-uebergang");
  }, 500); // 500ms Verzögerung bis Code in der Funktion ausgeführt wird. Code darunter wird direkt ohne Verzögerung ausgeführt
  hamburgerMenuContainer.classList.remove("einblenden");
  introHeading.classList.remove("ausblenden-uebergang");
  introHeading.classList.add("einblenden-uebergang");
});

function scrollToTop() {
  window.scrollTo({
    top:0,
    behavior: "smooth",
  });
}