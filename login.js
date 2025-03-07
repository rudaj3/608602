const users = {
    "X9vPz3Qk": "mL8@zTpW",
    "R4tYp6Wd": "Jv9#XcK2",
    "Qz7Nr5Xy": "Gm3!WvTp"

};

function login() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (users[username] && users[username] === password) {

        window.location.href = 'index1.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}