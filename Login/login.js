function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    if (user === "" || pass === "") {
        alert("All fields required");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    alert("Registration successful");
    window.location.href = "login.html";
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
        localStorage.setItem("loggedIn", true);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}

function checkAuth() {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "index.html";
    } else {
        let user = localStorage.getItem("username");
        document.getElementById("user").innerText = user;
        document.getElementById("userCard").innerText = user;
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.getElementById("hamburger");
    
    // Toggle the sidebar width
    sidebar.classList.toggle("collapsed");
    
    // Toggle the hamburger animation (from 3 lines to X)
    hamburger.classList.toggle("open");
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
