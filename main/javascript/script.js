//Bejelentkezés//
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('button[type="submit"]');

let usernameErrorMessage = document.createElement('div');
usernameErrorMessage.style.color = 'red';
usernameInput.after(usernameErrorMessage);

let passwordErrorMessage = document.createElement('div');
passwordErrorMessage.style.color = 'red';
passwordInput.after(passwordErrorMessage);

let errorMessage = document.createElement('div');
errorMessage.style.color = 'red';
submitButton.after(errorMessage);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;
    let error = false;
    usernameErrorMessage.textContent = '';
    passwordErrorMessage.textContent = '';
    errorMessage.textContent = '';

    if (!username) {
        usernameErrorMessage.textContent = 'Nincs kitöltve a felhasználónév!';
        error = true;
    }
    if (!password) {
        passwordErrorMessage.textContent = 'Nincs kitöltve a jelszó!';
        error = true;
    }
    if (!error && (username !== 'admin' || password !== '1234')) {
        errorMessage.textContent = 'Helytelen felhasználónév vagy jelszó!';
        error = true;
    }
    if (!error) {
        form.reset();
        animateLoginSuccess();
    }
});

function animateLoginSuccess() {
    document.querySelector(".container").style.display = "none";
    form.style.display = 'none';
    const h1 = document.querySelector('h1');
    h1.style.display = 'none';
    const successMessageContainer = document.createElement('div');
    successMessageContainer.style.color = 'green';
    successMessageContainer.style.position = 'absolute';
    successMessageContainer.style.top = '50%';
    successMessageContainer.style.left = '50%';
    successMessageContainer.style.transform = 'translate(-50%, -50%)';
    successMessageContainer.style.fontSize = '28px';
    successMessageContainer.style.padding = '45px';
    successMessageContainer.style.border = 'black solid 2px'
    successMessageContainer.style.borderRadius = '10px'
    successMessageContainer.style.backgroundColor = 'white'
    document.body.appendChild(successMessageContainer);

    const greeting = document.createElement('div');
    greeting.textContent = 'Üdvözöljük!';
    greeting.style.fontSize = '28px';
    successMessageContainer.appendChild(greeting);

    const successMessage = document.createElement('div');
    successMessage.textContent = 'Sikeres bejelentkezés!';
    successMessage.style.fontSize = '18px';
    successMessageContainer.appendChild(successMessage);

    let counter = 1;
    const intervalId = setInterval(() => {
        counter--;
        if (counter === 0) {
            clearInterval(intervalId);
            window.location.href = 'html.html';
        }
    }, 1000);
}

//Verzió//
const versionNumber = document.querySelector("#version-number");
const popup = document.querySelector("#popup");
const closeButton = document.querySelector("#close-button");

versionNumber.addEventListener("click", function () {
    popup.style.display = "block";
});

closeButton.addEventListener("click", function () {
    popup.style.animation = "slideOut 1s ease-in-out";
    setTimeout(function () {
        popup.style.display = "none";
        popup.style.animation = "slideIn 1s ease-in-out";
    }, 1000);
});

//Szövegdobozban lévő szöveg//
const username = document.getElementById("username");
const password = document.getElementById("password");

username.addEventListener("focus", function () {
    this.style.backgroundColor = "green";
    this.style.color = "black";
    this.style.transform = "scale(1.05)";
    this.style.cursor = "pointer";
    this.style.fontWeight = "bolder";
});

username.addEventListener("blur", function () {
    this.style.backgroundColor = "";
    this.style.color = "";
    this.style.transform = "";
    this.style.cursor = "";
    this.style.fontWeight = "bolder";
});

password.addEventListener("focus", function () {
    this.style.backgroundColor = "green";
    this.style.color = "black";
    this.style.transform = "scale(1.05)";
    this.style.cursor = "pointer";
    this.style.fontWeight = "bolder";
});

password.addEventListener("blur", function () {
    this.style.backgroundColor = "";
    this.style.color = "";
    this.style.transform = "";
    this.style.cursor = "";
    this.style.fontWeight = "bolder";
});

//Ha ráviszem az egeret a szövegdobozra akkor belekattintás nélkül
//bele lehet írni
//Felhasználónév:
document.getElementById("username").addEventListener("mouseover", function () {
    this.focus();
});
//Jelszó:
document.getElementById("password").addEventListener("mouseover", function () {
    this.focus();
});

//Menü//
const navbar = document.querySelector("#navbar");


navbar.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "A") {
        event.target.style.backgroundColor = "lightgray";
        event.target.style.borderRadius = "10px";
    }
});

navbar.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "A") {
        event.target.style.backgroundColor = "";
        event.target.style.borderRadius = "";
    }
});
const toggleButton = document.querySelector('#toggleButton');
const textBox = document.querySelector('#textBox');