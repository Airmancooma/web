document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("html.html")
    }
})

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            location.replace("html.html")
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/wrong-password":
                    document.getElementById("error").innerHTML = "Hibás jelszó";
                    break;
                case "auth/user-not-found":
                    document.getElementById("error").innerHTML = "Hibás email";
                    break;
                case 'auth/user-disabled':
                    document.getElementById("error").innerHTML = "A felhasználói fiókot a rendszergazda letiltotta."
                    break;
                default:
                    document.getElementById("error").innerHTML = error.message;
            }
        });
}

function signUp() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            location.replace("html.html")
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/email-already-in-use":
                    document.getElementById("error").innerHTML = "Ezzel az emailel már van létrehozva fiók";
                    break;
                case "auth/invalid-email":
                    document.getElementById("error").innerHTML = "Az e-mail cím rosszul van formázva.";
                    break;
                case "auth/invalid-password":
                    document.getElementById("error").innerHTML = "Az e-mail cím rosszul van formázva.";
                    break;
                case "auth/weak-password":
                    document.getElementById("error").innerHTML = "A jelszónak legalább 6 karakter hosszúnak kell lennie.";
                    break;
                default:
                    document.getElementById("error").innerHTML = error.message;
            }
        });
}


function forgotPass() {
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Az Ön e-mail címére küldtünk visszaállítási linket")
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/user-not-found":
                    document.getElementById("error").innerHTML = "Nem tudtuk elküldeni az emailt mert ezzel az email címmel nincs létrehozva fiók";
                    break;
                default:
                    document.getElementById("error").innerHTML = error.message;
            }
        });
}
