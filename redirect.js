// Patikriname, ar vartotojas jau prisijungė
if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html'; // Jei ne, nukreipiame į login.html
}
