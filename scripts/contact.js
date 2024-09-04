const submitButton = document.getElementById("send");
const feedbackForm = document.getElementById("feedback-form");

let inputVorname = document.getElementById("firstname");
let inputNachname = document.getElementById("lastname");
let inputMail = document.getElementById("mail");
let inputFeedback = document.getElementById("feedback");

/*
  i = ignoriert Groß- & Kleinschreibung
*/

const vornameMuster = /[a-zäöüßàáâãäåçèéêëìíîïðñòóôõöùúûüýÿæœ]{2,}$/i;
const nachnameMuster = /[a-zäöüßàáâãäåçèéêëìíîïðñòóôõöùúûüýÿæœ]{4,}$/i;
// Prüfen mit und Ohne $
// Validierung über Array alternative testen
const emailMuster = /[a-zäöüßàáâãäåçèéêëìíîïðñòóôõöùúûüýÿæœ]{2,}@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|hotmail\.de|live\.com|aol\.com|icloud\.com|gmx\.de|gmx\.com|web\.de|protonmail\.com|proton\.me|t-online\.de|zoho\.com|mail\.com|yahoo\.co\.uk|yahoo\.fr|yahoo\.com)/i;
const feedbackMuster = /[a-zäöüßàáâãäåçèéêëìíîïðñòóôõöùúûüýÿæœ]{10,}/i;

// ARRAY FÜR INPUT-FELDER
const eingabeFelder = [
  inputVorname,
  inputNachname,
  inputMail,
  inputFeedback
];



// ABSENDEN EVENT
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  // PRÜFEN OB MELDUNG NACH ABSENDEN VORHANDEN
  let successBoxVorhanden = document.querySelector(".success-box");
  // VALIDIERUNG AUF TRUE / SOBALD EINE VALIDIERUNG NICHT ERFOLGREICH AUF FALSE
  let validierung = true;

  if (successBoxVorhanden) {
    successBoxVorhanden.remove();
  }

  // VALIDIERUNGEN
  // VORNAME
  if (inputVorname.value == "") {
    inputVorname.setAttribute("placeholder", "Das Feld darf nicht leer sein.");
    inputVorname.classList.add("error-text");
    validierung = false;
  } else if (!vornameMuster.test(inputVorname.value)) {
    inputVorname.value = "";
    inputVorname.setAttribute("placeholder", "Vorname muss mindestens 2 Buchstaben haben.");
    validierung = false;
  } 

  // NACHNAME
  if (inputNachname.value == "") {
    inputNachname.setAttribute("placeholder", "Das Feld darf nicht leer sein.");
    inputNachname.classList.add("error-text");
    validierung = false;
  } else if (!nachnameMuster.test(inputNachname.value)) {
    inputNachname.value = "";
    inputNachname.setAttribute("placeholder", "Nachname muss mindestens 4 Buchstaben haben");
    validierung = false;
  }

  // E-MAIL
  if(inputMail.value == "") {
    inputMail.setAttribute("placeholder", "Das Feld darf nicht leer sein.");
    inputMail.classList.add("error-text");
    validierung = false;
  } else if (!emailMuster.test(inputMail.value)) {
    // Feld leeren wenn Prüfung auf Muster fehlschlägt
    inputMail.value = "";
    inputMail.setAttribute("placeholder", "Die E-Mail muss ein '@' enthalten.");
    validierung = false;
  }

  // FEEDBACK
  if (inputFeedback.value == "") {
    inputFeedback.setAttribute("placeholder", "Das Feld darf nicht leer sein.");
    inputFeedback.classList.add("error-text");
    validierung = false;
  } else if (!feedbackMuster.test(inputFeedback.value)) {
    // Feld leeren wenn Prüfung auf Muster fehlschlägt
    inputFeedback.value = "";
    inputFeedback.setAttribute("placeholder", "Die Nachricht muss mindestens 10 Zeichen lang sein.");
    validierung = false;
  }

  // NACHRICHT ERSTELLEN BEI ERFOLGREICHER VALIDIERUNG 
  if (validierung === true) {
    // Neues div-Element erstellen
    const messageBox = document.createElement("div");
    // Textinhalt hinzufügen
    messageBox.textContent = "Ihre Nachricht wurde übermittelt. Wir werden uns schnellstmöglich bei Ihnen melden.";
    // Klasse für Styling hinzufügen
    messageBox.classList.add("success-box");
    // Element nach Button einfügen
    submitButton.insertAdjacentElement("afterend", messageBox);
    // Zu Messagebox scrollen
    feedbackForm.scrollIntoView({ behavior: "smooth", block: "end" });
    // FELDER LEEREN SCHLEIFE
    eingabeFelder.forEach(element => {
      element.value = "";
      element.setAttribute("placeholder","");
      element.classList.remove("error-text");
    });
  }
});

