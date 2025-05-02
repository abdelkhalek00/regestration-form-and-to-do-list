
var loginEmailInput = document.getElementById("loginEmailInput")
var loginPasswordInput = document.getElementById("loginPasswordInput")
var loginBtn = document.getElementById("login");




//validation function//
function validation() {
    dataContainer = JSON.parse(localStorage.getItem("userData"))
    for (var i = 0; i < dataContainer.length; i++) {
        if (loginEmailInput.value == dataContainer[i].email && loginPasswordInput.value == dataContainer[i].password) {
            window.location=("../home1.html");
            // loginBtn.href="../home1.html";
            return;
        }
    }
    document.getElementById("invalidMessage").innerHTML = "invalid email or password";
}
loginBtn.addEventListener("click", function () {
    validation();
    event.preventDefault();
})