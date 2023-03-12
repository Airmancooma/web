//Verzió//
const versionNumber = document.querySelector("#version-number");
const popupVersion = document.querySelector("#popup-version");
const versionCloseButton = document.querySelector("#version-close-button");
const versionLog = document.querySelector(".version-log");

versionNumber.addEventListener("click", function () {
    popupVersion.style.display = "block";
    fetch('version-log.html')
        .then(response => response.text())
        .then(data => {
            versionLog.innerHTML = data;
            versionLog.style.listStyle = "none";
        })
        .catch(error => {
            console.error(error);
        });
});

versionCloseButton.addEventListener("click", function () {
    popupVersion.style.animation = "slideOut 1s ease-in-out";
    setTimeout(function () {
        popupVersion.style.display = "none";
        popupVersion.style.animation = "slideIn 1s ease-in-out";
    }, 1000);
});


