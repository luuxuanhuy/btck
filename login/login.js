let data = localStorage.getItem('users');
if (data) {
    data = JSON.parse(data);
} else {
    data = [
        {
            email: "admin@gmail.com",
            username: 'admin',
            password: 'admin123',
        }
    ];
    localStorage.setItem('users', JSON.stringify(data));
}

document.getElementById('btnLogin').addEventListener('click', handleLogin);

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userExists = data.some(user => user.username === username && user.password === password);

    if (userExists) {
        window.location.href = "http://127.0.0.1:5500/index/index.html"
    } else {
      alert('Login Error');
    }
}