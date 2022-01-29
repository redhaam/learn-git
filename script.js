// Hichem's script

let toggleButton = document.querySelector("#toggle");

let htmlBody = document.body;

toggleButton.addEventListener("click", switchToDarkTheme);

function switchToDarkTheme() {
   htmlBody.classList.toggle("darkTheme")
}

// Hichem's script's end
