document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Replace this with your own server-side validation
    if (username === 'admin' && password === 'password') {
        window.open('admin.html', '_blank');
    } else {
        document.getElementById('username').style.borderColor = 'red';
        document.getElementById('password').style.borderColor = 'red';
    }
});