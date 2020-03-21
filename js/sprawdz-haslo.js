

function sprawdz_haslo() {

    var haslo = document.getElementById("haslo").value;

    if('PaulinaiJan' === haslo) {
        window.location.replace("paulina-i-jan.html");
    } else {
        alert("HASŁO NIEPRAWIDŁOWE.");
    }
}

// Poniższy kod powoduje "Wciśnięcie" przycisku "potwierdz_haslo" w momencie, gdy użytkownik naciśnie enter
var input = document.getElementById("haslo");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("potwierdz_haslo").click();
  }
});

function pokaz_haslo() {

    var przycisk_podpowiedz = document.getElementById("przycisk_podpowiedz");

    let loggedDiv = document.createElement("div");

    let podpowiedz = document.createTextNode("Hasło: PaulinaiJan");

    loggedDiv.appendChild(podpowiedz);

    var zdjecie_przycisku = document.getElementById("zdjecie_przycisku");

    przycisk_podpowiedz.removeChild(zdjecie_przycisku);

    przycisk_podpowiedz.appendChild(loggedDiv);

}