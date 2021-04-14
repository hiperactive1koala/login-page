const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

function login(){
    loginForm.style.left = "0px";
    registerForm.style.left = "375px";
}

function Register(){
    loginForm.style.left = "-375px";
    registerForm.style.left = "0px";
}
