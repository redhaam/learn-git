// Hichem's script

let toggleButton = document.querySelector("#toggle");

let darkTheme = false;

let htmlBody = document.body;

toggleButton.addEventListener("click", switchToDarkTheme);

function switchToDarkTheme(params) {
    if (darkTheme = false) {
        htmlBody.classList.add("darkTheme")
    }else if (darkTheme) {
        htmlBody.classList.remove("darkTheme")
    }
}

// Hichem's script's end
