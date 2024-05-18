const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const accounts = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
  { username: "user4", password: "password4" },
  { username: "user5", password: "password5" },
  { username: "user6", password: "password6" },
  { username: "user7", password: "password7" },
  { username: "user8", password: "password8" },
  { username: "user9", password: "password9" },
  { username: "user10", password: "password10" }
];
function addAccount(username, password) {
  const newAccount = { username: username, password: password };
  accounts.push(newAccount);
  openNewPage();
}
function login(username, password) {
  for (let i = 0; i < accounts.length; i++) {
    if (username === accounts[i].username && password === accounts[i].password) {
      openNewPage();
      return true;
    }
  }
  alert("Username or Password is incorrect");
  return false;
}
function handleFormSubmit(event) {
  event.preventDefault(); 
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;
  login(enteredUsername, enteredPassword);
}
function handleForm(event) {
  event.preventDefault(); 
  const newUsername = document.getElementById("usernam").value;
  const newPassword = document.getElementById("passwor").value;
  const newuser=addAccount(newUsername, newPassword);
}
function openNewPage() {
  console.log("Opening menu.html");
  window.location.href = 'menu.html';
}
document.getElementById("sig").addEventListener("submit", handleFormSubmit);
document.getElementById("signup").addEventListener("submit",handleForm);