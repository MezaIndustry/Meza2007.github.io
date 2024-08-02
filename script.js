document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    
    if (password === 'Informatica') {
        window.location.href = 'introduccion.html';
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
});
