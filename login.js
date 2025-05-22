document.getElementById('loginBtn').addEventListener('click', checkPassword);

document.getElementById('passwordInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const correctPassword = 'swimrokas123'; // Čia įrašyk savo slaptažodį

    if (input === correctPassword) {
        localStorage.setItem('loggedIn', 'true'); // Pažymim, kad vartotojas prisijungė
        window.location.href = 'index.html'; // Nukreipiam į pagrindinį puslapį
    } else {
        alert('Neteisingas slaptažodis!');
    }
}
